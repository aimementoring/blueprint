import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactPhoneInput from "react-phone-number-input";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import { withValidation } from "../../utils/hocs";
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
    onChangeFunction(name, value, isWrongValidation);
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
      onCountrySelected,
      ...inputProps
    } = this.props;

    return (
      <div
        className={`${containerClassName} ${styles[`theme-${theme}`]} ${
          styles.inputWrapper
        }`}
      >
        <ReactPhoneInput
          country={defaultCountry}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          error={isValidationOk() ? "" : getValidationMessage()}
          className={className}
          onCountryChange={onCountrySelected}
          {...inputProps}
        />
      </div>
    );
  }
}

export default withValidation(PhoneInput);
