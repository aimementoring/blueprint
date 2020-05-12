import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import { withValidation } from '../../utils/hocs';
import styles from './checkbox.module.scss';

class Checkbox extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    customId: PropTypes.string,
    onChangeFunction: PropTypes.func,
    value: PropTypes.bool,
    extraParamResponse: PropTypes.string,
    // props from withValidation HOC
    renderValidationError: PropTypes.func.isRequired,
    handleValidations: PropTypes.func.isRequired,
    isValidationOk: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    className: '',
    onChangeFunction: () => {},
    value: false,
    extraParamResponse: '',
  };

  handleFieldChange = e => {
    e.preventDefault();
    const {
      onChangeFunction,
      name,
      extraParamResponse,
      value,
      handleValidations,
    } = this.props;
    const isWrongValidation = handleValidations(value);
    onChangeFunction(name, !value, extraParamResponse, isWrongValidation);
  };

  render() {
    const {
      className,
      placeholder,
      name,
      customId,
      value,
      theme,
      isValidationOk,
      renderValidationError,
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div
          className={`${className} ${styles.customCheckbox} ${
            styles.customCheckboxDefault
          } ${isValidationOk() ? styles.error : ''}`}
          onClick={this.handleFieldChange}
        >
          {renderValidationError(styles.errorMessage)}
          <input type="hidden" name={name} value="no" />
          <input
            id={customId}
            type="checkbox"
            name={name}
            value="yes"
            readOnly
            className={`${isValidationOk() ? styles.error : ''}`}
            checked={value}
          />
          <label
            className={`${isValidationOk() ? styles.error : ''}`}
            htmlFor={customId}
          >
            {placeholder}
          </label>
        </div>
      </div>
    );
  }
}

export default withValidation(Checkbox);
