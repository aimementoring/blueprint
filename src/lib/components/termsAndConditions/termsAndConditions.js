import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import Paragraph from '../paragraph';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './termsAndConditions.module.scss';

class TermsAndConditions extends PureComponent {
  handleChange = (name, inputValue) => {
    this.props.onChange(name, inputValue);
  };

  render() {
    const {
      theme,
      pdf,
      drive,
      children,
      checkboxLabel,
      className,
      containerClassName,
      value,
      name,
      paragraph,
      height,
    } = this.props;

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
          {paragraph && (
            <div className={`${styles.textContainer} ${className}`} style={containerStyle}>
              {typeof paragraph === 'string' ? (
                <Paragraph text={paragraph} />
              ) : (
                paragraph.map(item => <Paragraph text={item} />)
              )}
            </div>
          )}
          {checkboxLabel && (
            <div className={styles.termsCheckbox}>
              <Checkbox
                onChangeFunction={this.handleChange}
                placeholder={checkboxLabel}
                name={name}
                value={value}
              />
            </div>
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
  paragraph: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onChange: PropTypes.func,
  height: PropTypes.number,
  value: PropTypes.bool,
};

TermsAndConditions.defaultProps = {
  ...defaultComponentPropTypes,
  pdf: null,
  drive: null,
  children: null,
  checkboxLabel: null,
  paragraph: null,
  onChange: () => {},
  height: null,
  value: false,
};

export default TermsAndConditions;
