import React from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './labeledInput.module.scss';

const LabeledInput = ({
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
  ...inputProps
}) => {
  const handleChange = event => {
    const inputValue = event.target.value;
    const isWrongValidation = handleValidations(inputValue);
    onChangeFunction(name, inputValue, isWrongValidation);
  };

  return (
    <div className={styles[`theme-${theme}`]}>
      <div className={styles.wrapper}>
        <input
          className={`${className} ${error && styles.error}`}
          type={type || 'text'}
          id={name}
          name={name}
          onChange={handleChange}
          value={value}
          {...inputProps}
        />
        <label for={name}>
          <span className={styles.fieldName}>{label}</span>
        </label>
        <span className={`${styles.errorMessage} ${error && styles.active}`}>{error}</span>
        {!error && helperText && <span className={styles.helperMessage}>{helperText}</span>}
      </div>
    </div>
  );
};

LabeledInput.propTypes = {
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

LabeledInput.defaultProps = {
  ...defaultComponentPropTypes,
  value: null,
  error: null,
  className: '',
  type: 'text',
  helperText: null,
  handleValidations: () => true,
  onChangeFunction: () => {},
};

export default LabeledInput;
