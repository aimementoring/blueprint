import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactPhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import { withValidation } from '../../utils/hocs';
import styles from './phoneInput.module.scss';

class PhoneInput extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    defaultCountry: PropTypes.string,
    value: PropTypes.string,
    onChangeFunction: PropTypes.func,
    onCountrySelected: PropTypes.func,
    handleValidations: PropTypes.func,
    // http://catamphetamine.github.io/react-phone-number-input/docs/styleguide/index.html#phoneinput
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: 'phone',
    className: styles.input,
    name: 'phone',
    required: false,
    defaultCountry: 'AU',
    value: '',
    onCountrySelected: () => {},
    onChangeFunction: () => {},
    handleValidations: () => true,
    // http://catamphetamine.github.io/react-phone-number-input/docs/styleguide/index.html#phoneinput
  };

  handleChange = value => {
    const { name, onChangeFunction, handleValidations } = this.props;
    let parsedValue = {};
    const isWrongValidation = handleValidations(value);

    if (value) {
      parsedValue = parsePhoneNumber(value);
    }
    onChangeFunction(name, value, isWrongValidation, parsedValue);
  };

  render() {
    const {
      containerClassName,
      required,
      defaultCountry,
      value,
      className,
      theme,
      placeholder,
      isValidationOk,
      renderValidationError,
      getValidationMessage,
      ...inputProps
    } = this.props;

    return (
      <div
        className={`${containerClassName} ${styles[`theme-${theme}`]} ${
          styles.inputWrapper
        }`}
      >
        <ReactPhoneInput
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          error={isValidationOk() ? '' : getValidationMessage()}
          className={`${className} ${
            isValidationOk() && styles.error ? styles.error : 'PEPITOO'
          }`}
          {...inputProps}
          country={defaultCountry}
        />
        {renderValidationError()}
      </div>
    );
  }
}

export default withValidation(PhoneInput);
