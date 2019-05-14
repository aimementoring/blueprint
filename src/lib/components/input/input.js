import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import {
  isSafari,
  isIE,
} from '../../utils/detectBrowser';
import { withValidation } from '../../utils/hocs';
import styles from './input.module.scss';
import 'react-day-picker/lib/style.css';

class Input extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChangeFunction: PropTypes.func,
    // props from withValidation HOC
    renderValidationError: PropTypes.func,
    handleValidations: PropTypes.func.isRequired,
    isValidationOk: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: '',
    disabled: false,
    required: true,
    value: '',
    type: 'text',
    onChangeFunction: () => { },
  };

  handleChange = name => event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { onChangeFunction, handleValidations } = this.props;
    const isWrongValidation = handleValidations(value);
    onChangeFunction(name, value, isWrongValidation);
  };

  renderInput = () => {
    const {
      className,
      placeholder,
      disabled,
      required,
      name,
      value,
      type,
      isValidationOk,
      autoFocus,
    } = this.props;

    if (type === 'date' && (isSafari() || isIE())) {
      return <DayPickerInput
        onDayChange={this.handleChange(name)}
        value={value} />;
    }
    return <input
      placeholder={placeholder}
      className={`${isValidationOk() && styles.error} ${className} ${styles.input}`}
      value={value}
      name={name}
      type={type}
      required={required}
      onChange={this.handleChange(name)}
      disabled={disabled ? 'disabled' : ''}
      autoFocus={autoFocus}
    />
  }

  render() {
    const {
      containerClassName,
      theme,
      renderValidationError,
    } = this.props;

    return (
      <div className={`${containerClassName} ${styles[`theme-${theme}`]} ${styles.inputWrapper}`}>
        {this.renderInput()}
        {renderValidationError()}
      </div>
    );
  }
}

export default withValidation(Input);
