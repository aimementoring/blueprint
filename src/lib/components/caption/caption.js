import React from 'react';
import PropTypes from 'prop-types';
import styles from './caption.module.scss';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

const Caption = ({ text, className, theme, children }) => (
  <div className={styles[`theme-${theme}`]}>
    <p className={`${styles.caption} ${className}`}>
      {children || text}
    </p>
  </div>
);

Caption.propTypes = {
  ...componentPropTypes,
  text: PropTypes.string,
  children: PropTypes.node,
};

Caption.defaultProps = {
  ...defaultComponentPropTypes,
};

export default Caption;
