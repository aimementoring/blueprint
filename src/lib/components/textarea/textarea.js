import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import { withValidation } from '../../utils/hocs';
import { handleInputChange } from './utils.ignore';
import styles from './textarea.module.scss';

const Textarea = ({
  theme,
  name,
  value,
  className,
  containerClassName,
  onChangeFunction,
  label,
  helperText,
  autoFocus,
  required,
  disabled,
  readOnly,
  placeholder,
  // props from withValidation HOC
  validations,
  renderValidationError,
  validationMessage,
  handleValidations,
  hasValidaationError,
  hasErrorAfterSubmit,
  getValidationMessage,
  // the rest
  ...inputProps
}) => {
  const handleChange = event =>
    handleInputChange(event, name, handleValidations, onChangeFunction);

  return (
    <div className={styles[`theme-${theme}`]}>
      <div className={classNames(containerClassName, styles.wrapper)}>
        <textarea
          className={classNames(className, styles.input, styles.textarea, {
            [styles.error]: hasValidaationError(),
          })}
          id={name}
          name={name}
          onChange={handleChange}
          value={value}
          required={required || false}
          autoFocus={autoFocus}
          readOnly={readOnly}
          disabled={disabled}
          {...inputProps}
        />
        <label htmlFor={name}>
          <span className={styles.fieldName}>{label || placeholder}</span>
        </label>
        {renderValidationError()}
        {helperText && (
          <span className={styles.helperMessage}>{helperText}</span>
        )}
      </div>
    </div>
  );
};

Textarea.propTypes = {
  ...componentPropTypes,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  containerClassName: PropTypes.string,
  // to make the "old usage" work in Portal
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  onChangeFunction: PropTypes.func,
  // props from withValidation HOC
  validationMessage: PropTypes.string,
  renderValidationError: PropTypes.func,
  handleValidations: PropTypes.func.isRequired,
  hasValidaationError: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  ...defaultComponentPropTypes,
  value: null,
  label: '',
  className: '',
  containerClassName: '',
  required: false,
  autoFocus: false,
  helperText: null,
  disabled: false,
  readOnly: false,
  handleValidations: () => true,
  onChangeFunction: () => {},
};

export default withValidation(Textarea);
