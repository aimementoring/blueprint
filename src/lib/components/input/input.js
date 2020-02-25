import React from "react";
import PropTypes from "prop-types";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import { handleInputChange } from "../oldInput/utils.ignore";
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
  handleValidations,
  isValidationOk,
  ...inputProps
}) => {
  const handleChange = event =>
    handleInputChange(event, name, handleValidations, onChangeFunction);

  return (
    <div className={styles[`theme-${theme}`]}>
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
          {`${error} ${renderValidationError()}`}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.string,
  onChangeFunction: PropTypes.func,
  // props from withValidation HOC
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
  helperText: null,
  handleValidations: () => true,
  onChangeFunction: () => { },
};

export default withValidation(Input);
