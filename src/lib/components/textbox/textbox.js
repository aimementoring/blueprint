import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import { withValidation } from '../../utils/hocs';
import styles from './textbox.module.scss';

class TextBox extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
    // props from withValidation HOC
    handleValidations: PropTypes.func.isRequired,
    isValidationOk: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: '',
    required: true,
    onChangeFunction: () => { },
    value: '',
  };

  handleChange = event => {
    const { onChangeFunction, name, handleValidations } = this.props;
    const value = event.target.value;
    const isWrongValidation = handleValidations(value);
    onChangeFunction(name, value, isWrongValidation);
  };

  render() {
    const {
      containerClassName,
      placeholder,
      name,
      required,
      className,
      value,
      theme,
      isValidationOk,
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.inputWrapper} ${containerClassName}`}>
          <textarea
            className={`${styles.input} ${styles.textarea} ${className}
              ${isValidationOk() && styles.error}`}
            placeholder={placeholder}
            onChange={this.handleChange}
            name={name}
            value={value}
            required={required || false}
          />
        </div>
      </div>
    );
  }
}

export default withValidation(TextBox);
