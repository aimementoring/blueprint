import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
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
    getValidationMessage: PropTypes.func,
    handleValidations: PropTypes.func.isRequired,
    isValidationOk: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    onChangeFunction: () => { },
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
      getValidationMessage,
    } = this.props;

    return (
      <div className={`${styles[`theme-${theme}`]} ${styles.wrapper}`}>
        <div
          className={`${className} ${styles.customCheckbox} ${styles.customCheckboxDefault}`}
          onClick={this.handleFieldChange}
        >
          <input type="hidden" name={name} value="no" />
          <input
            id={customId}
            type="checkbox"
            className="hide"
            name={name}
            value="yes"
            readOnly
            checked={value}
          />
          <label
            htmlFor={customId}
            className={`${isValidationOk() && styles.error}`}
          >{placeholder}
          </label>
        </div>
        {isValidationOk() &&
          <span className={styles.errorMessage}>{getValidationMessage()}</span>}
      </div>
    );
  }
}

export default withValidation(Checkbox);
