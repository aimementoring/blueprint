import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './termsAndConditions.module.scss';

const TermsAndConditions = ({
  theme,
  pdf,
  children,
  checkboxLabel,
  onChange,
  className,
  containerClassName,
  height,
}) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (name, value) => {
    setChecked(value);
    onChange(value);
  };

  const containerStyle = {};
  if (height) containerStyle.height = `${height}px`;

  return (
    <div className={containerClassName}>
      <div className={styles[`theme-${theme}`]}>
        {pdf && (
          <div className={`${styles.termsContainer} ${className}`} style={containerStyle}>
            <object
              data={`${pdf}#view=FitH`}
              type="application/pdf"
              className={styles.objectContainer}
            >
              <embed src={`${pdf}#view=FitH`} type="application/pdf" />
            </object>
          </div>
        )}
        {children && (
          <div className={`${styles.textContainer} ${className}`} style={containerStyle}>
            {children}
          </div>
        )}
        {checkboxLabel && (
          <Checkbox
            onChangeFunction={handleChange}
            placeholder={checkboxLabel}
            name="checkbox"
            value={checked}
          />
        )}
      </div>
    </div>
  );
};

TermsAndConditions.propTypes = {
  ...componentPropTypes,
  pdf: PropTypes.string,
  children: PropTypes.node,
  checkboxLabel: PropTypes.string,
  onChange: PropTypes.func,
  height: PropTypes.number,
};

TermsAndConditions.defaultProps = {
  ...defaultComponentPropTypes,
  pdf: null,
  children: null,
  checkboxLabel: null,
  onChange: () => {},
  height: null,
};

export default TermsAndConditions;
