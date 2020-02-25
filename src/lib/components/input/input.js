import React from "react";
import PropTypes from "prop-types";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import { handleInputChange } from "../oldInput/utils.ignore";
import styles from "./input.module.scss";

const Input = ({
  theme,
  name,
  value,
  error,
  label,
  className,
  type,
  onChangeFunction,
  handleValidations,
  helperText,
  containerClassName,
  placeholder,
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
          {...inputProps}
        />
        <label htmlFor={name}>
          <span className={styles.fieldName}>{label || placeholder}</span>
        </label>
        <span className={`${styles.errorMessage} ${error && styles.active}`}>
          {error}
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
  handleValidations: PropTypes.func,
  onChangeFunction: PropTypes.func,
};

Input.defaultProps = {
  ...defaultComponentPropTypes,
  value: null,
  error: null,
  className: "",
  type: "text",
  helperText: null,
  handleValidations: () => true,
  onChangeFunction: () => { },
};

export default Input;
