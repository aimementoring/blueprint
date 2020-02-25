import React from "react";
import PropTypes from "prop-types";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import { handleInputChange } from './utils.ignore';
import { withValidation } from '../../utils/hocs';
import styles from "./input.module.scss";

const Input = ({
  theme,
  name,
  value,
  label,
  error,
  className,
  type,
  onChangeFunction,
  helperText,
  containerClassName,
  placeholder,
  disabled,
  autoFocus,
  // props from withValidation HOC
  renderValidationError,
  validationMessage,
  handleValidations,
  isValidationOk,
  // aaand the rest,
  ...inputProps
}) => {
  const handleChange = event =>
    handleInputChange(event, name, handleValidations, onChangeFunction);

  return (
    <div className={`${styles[`theme-${theme}`]} ${containerClassName}`}>
      <div className={styles.wrapper}>
        <input
          className={`${className} ${error && styles.error}`}
          type={type || "text"}
          id={name}
          name={name}
          onChange={handleChange}
          value={value}
          disabled={disabled ? 'disabled' : ''}
          autoFocus={autoFocus}
          {...inputProps}
        />
        <label htmlFor={name}>
          <span className={styles.fieldName}>{label || placeholder}</span>
        </label>
        <span className={`${isValidationOk() && styles.error} ${styles.input} ${className} ${styles.errorMessage} ${error && styles.active}`}>
          {error}
          {renderValidationError()}
        </span>
        {!error && helperText && (
          <span className={styles.helperMessage}>{helperText}</span>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  ...componentPropTypes,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onChangeFunction: PropTypes.func,
  // props from withValidation HOC
  validationMessage: PropTypes.string,
  renderValidationError: PropTypes.func,
  handleValidations: PropTypes.func.isRequired,
  isValidationOk: PropTypes.func.isRequired,
};

Input.defaultProps = {
  ...defaultComponentPropTypes,
  value: null,
  error: null,
  className: "",
  type: "text",
  disabled: false,
  placeholder: '',
  helperText: null,
  handleValidations: () => true,
  onChangeFunction: () => { },
};

export default withValidation(Input);
