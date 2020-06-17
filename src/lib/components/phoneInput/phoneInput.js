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
    const {
      name,
      onChangeFunction,
      handleValidations,
      value: currentValue,
    } = this.props;

    let parsedValue = {};
    const isWrongValidation = handleValidations(value);
    let valueToReturn = value;
    if (value) {
      parsedValue = parsePhoneNumber(value);
      // check if the country code change and we have to change the country code wrote in the input
      if (currentValue && currentValue.indexOf('+') > -1 && parsedValue) {
        const parsedCurrentValue = parsePhoneNumber(currentValue);
        // change the flag of the country
        if (
          (parsedCurrentValue &&
            parsedCurrentValue.countryCallingCode !==
              parsedValue.countryCallingCode) ||
          (!parsedCurrentValue && value.indexOf(currentValue) === -1)
        ) {
          valueToReturn = parsedCurrentValue
            ? `+${parsedValue.countryCallingCode}${
              currentValue.split(parsedCurrentValue.countryCallingCode)[1]
            }`
            : `+${parsedValue.countryCallingCode}`;
        }
      }
    }

    onChangeFunction(name, valueToReturn, isWrongValidation, parsedValue);
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
      hasValidationError,
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
          error={hasValidationError() ? '' : getValidationMessage()}
          className={`${className} ${hasValidationError() && styles.error}`}
          {...inputProps}
          country={defaultCountry}
        />
        {renderValidationError()}
      </div>
    );
  }
}

export default withValidation(PhoneInput);
