import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import { handleInputChange } from './utils.ignore';
import { withValidation } from '../../utils/hocs';
import styles from './input.module.scss';

const Input = ({
  theme,
  name,
  value,
  label,
  // error,
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
  hasErrorAfterSubmit,
  getValidationMessage,
  // aaand the rest,
  ...inputProps
}) => {
  const handleChange = event =>
    handleInputChange(event, name, handleValidations, onChangeFunction);

  return (
    <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
      <div className={styles.wrapper}>
        <input
          className={`${className} ${isValidationOk() ? styles.error : ''}`}
          type={type || 'text'}
          id={name}
          name={name}
          onChange={handleChange}
          value={type !== 'date' ? value : undefined}
          defaultValue={type === 'date' ? value : undefined}
          disabled={disabled ? 'disabled' : ''}
          autoFocus={autoFocus}
          {...inputProps}
        />
        <label htmlFor={name}>
          <span className={styles.fieldName}>{label || placeholder}</span>
        </label>
        {helperText && (
          <span className={styles.helperMessage}>{helperText}</span>
        )}
        {renderValidationError()}
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
  className: '',
  type: 'text',
  disabled: false,
  placeholder: '',
  helperText: null,
  handleValidations: () => true,
  onChangeFunction: () => {},
};

export default withValidation(Input);
