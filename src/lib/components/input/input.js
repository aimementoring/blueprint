import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { checkValidations } from '../../utils/validation';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './input.module.scss';

export default class Input extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    onChangeFunction: PropTypes.func,
    onValidationFail: PropTypes.func,
    validations: PropTypes.array,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: '',
    disabled: false,
    required: true,
    value: '',
    type: 'text',
    validations: [],
    onChangeFunction: () => { },
    onValidationFail: () => { },
  };

  state = {
    validatedOk: true,
    validationMessage: '',
  }

  handleChange = name => event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { onChangeFunction, validations, onValidationFail } = this.props;
    const validationResultMsg = checkValidations(validations, value);
    if (validationResultMsg) {
      this.setState({ validatedOk: false, validationMessage: validationResultMsg })
      onValidationFail(name);
    } else {
      this.setState({ validatedOk: true, validationMessage: '' });
    }
    onChangeFunction(name, value);
  };

  render() {
    const {
      containerClassName,
      className,
      theme,
      placeholder,
      disabled,
      required,
      name,
      value,
      type,
    } = this.props;

    const {
      validatedOk,
      validationMessage,
    } = this.state;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.inputWrapper} ${containerClassName}`}>
          <input
            placeholder={placeholder}
            className={`${className} ${styles.input} ${!validatedOk && styles.error}`}
            value={value}
            name={name}
            type={type}
            required={required}
            onChange={this.handleChange(name)}
            disabled={disabled ? 'disabled' : ''}
          />
          {!validatedOk &&
            <span>{validationMessage}</span>}
        </div>
      </div>
    );
  }
}
