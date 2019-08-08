import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './termsAndConditions.module.scss';

class TermsAndConditions extends PureComponent {
  handleChange = (name, inputValue) => {
    this.props.onChange(inputValue);
  };

  render() {
    const {
      theme,
      pdf,
      drive,
      children,
      checkboxLabel,
      backgroundColor,
      className,
      containerClassName,
      value,
      height,
    } = this.props;

    const containerStyle = { backgroundColor };
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
          {drive && (
            <div className={`${styles.driveContainer} ${className}`} style={containerStyle}>
              <iframe
                src={`https://docs.google.com/document/d/e/${drive}/pub?embedded=true`}
                title="drive"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}
          {children && (
            <div className={`${styles.textContainer} ${className}`} style={containerStyle}>
              {children}
            </div>
          )}
          {checkboxLabel && (
            <Checkbox
              onChangeFunction={this.handleChange}
              placeholder={checkboxLabel}
              name="checkbox"
              value={value}
            />
          )}
        </div>
      </div>
    );
  }
}

TermsAndConditions.propTypes = {
  ...componentPropTypes,
  pdf: PropTypes.string,
  drive: PropTypes.string,
  children: PropTypes.node,
  checkboxLabel: PropTypes.string,
  onChange: PropTypes.func,
  height: PropTypes.number,
  value: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

TermsAndConditions.defaultProps = {
  ...defaultComponentPropTypes,
  pdf: null,
  drive: null,
  children: null,
  checkboxLabel: null,
  onChange: () => { },
  height: null,
  value: false,
  backgroundColor: '#eee',
};

export default TermsAndConditions;
