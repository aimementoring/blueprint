import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './pdfViewer.module.scss';

const PdfViewer = ({
  theme,
  pdf,
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
        <div className={`${styles.pdfContainer} ${className}`} style={containerStyle}>
          <object
            data={`${pdf}#view=FitH`}
            type="application/pdf"
            className={styles.objectContainer}
          >
            <embed src={`${pdf}#view=FitH`} type="application/pdf" />
          </object>
        </div>
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

PdfViewer.propTypes = {
  ...componentPropTypes,
  pdf: PropTypes.string.isRequired,
  checkboxLabel: PropTypes.string,
  onChange: PropTypes.func,
  height: PropTypes.number,
};

PdfViewer.defaultProps = {
  ...defaultComponentPropTypes,
  checkboxLabel: null,
  onChange: () => {},
  height: null,
};

export default PdfViewer;
