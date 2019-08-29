import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './errorMessage.module.scss';

const ErrorMessage = ({ message, theme, containerClassName, className }) => (
  <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
    <div className={`${styles.textContainer} ${message && styles.active}`}>
      <span className={classNames(styles.errorMessage, className)}>{`ERROR: ${message}`}</span>
    </div>
  </div>
);

ErrorMessage.propTypes = {
  ...componentPropTypes,
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  ...defaultComponentPropTypes,
  message: null,
};

export default ErrorMessage;
