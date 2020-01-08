import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactPhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import { withValidation } from "../../utils/hocs";
import countriesList from "../countrySelector/countryCollection.ignore";
import styles from "./phoneInput.module.scss";

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
    // http://catamphetamine.github.io/react-phone-number-input/docs/styleguide/index.html#phoneinput
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: "phone",
    className: styles.input,
    name: "phone",
    required: false,
    defaultCountry: "auto",
    value: "",
    onCountrySelected: () => {},
    onChangeFunction: () => {},
    // http://catamphetamine.github.io/react-phone-number-input/docs/styleguide/index.html#phoneinput
  };

  handleChange = value => {
    const { name, onChangeFunction, handleValidations } = this.props;

    const isWrongValidation = handleValidations(value);
    // eslint-disable-next-line no-console
    console.log({ value });
    onChangeFunction(name, value, isWrongValidation);
  };

  handleCountryChange = iso2 => {
    const { onCountrySelected, value } = this.props;
    const parsedValue = parsePhoneNumber(value);
    const country = countriesList.find(
      item => item.code.toUpperCase() === iso2.toUpperCase()
    );
    if (parsedValue && parsedValue.country) {
      // eslint-disable-next-line no-console
      console.log({
        iso2,
        parsed: parsedValue.country,
      });
    }
    onCountrySelected(value, {
      iso2,
      name: country ? country.name : "",
      dialCode: parsedValue
        ? parsedValue.countryCallingCode
        : country && country.phoneCode,
      nationalNumber: parsedValue ? parsedValue.nationalNumber : value,
    });
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
          defaultCountry={defaultCountry}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          error={isValidationOk() ? "" : getValidationMessage()}
          className={className}
          onCountryChange={this.handleCountryChange}
          {...inputProps}
        />
      </div>
    );
  }
}

export default withValidation(PhoneInput);
