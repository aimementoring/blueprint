import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { checkValidations } from '../../utils/validation';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './textbox.module.scss';

export default class TextBox extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
    validations: PropTypes.array,
    onValidationFail: PropTypes.func,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: '',
    required: true,
    onChangeFunction: () => {},
    value: '',
    validations: [],
    onValidationFail: () => {},
  };

  state = {
    validatedOk: true,
    validationMessage: '',
  };

  handleChange = event => {
    const { onChangeFunction, validations, onValidationFail, name } = this.props;
    const value = event.target.value;
    const validationResultMsg = checkValidations(validations, value);
    if (validationResultMsg) {
      this.setState({ validatedOk: false, validationMessage: validationResultMsg });
      onValidationFail(name);
    } else {
      this.setState({ validatedOk: true, validationMessage: '' });
    }
    onChangeFunction(name, value);
  };

  render() {
    const { containerClassName, placeholder, name, required, className, value, theme } = this.props;

    const { validatedOk, validationMessage } = this.state;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.inputWrapper} ${containerClassName}`}>
          <textarea
            className={`${styles.input} ${styles.textarea} ${className} ${!validatedOk &&
              styles.error}`}
            placeholder={placeholder}
            onChange={this.handleChange}
            name={name}
            value={value}
            required={required || false}
          />
        </div>
        {!validatedOk && <span>{validationMessage}</span>}
      </div>
    );
  }
}
