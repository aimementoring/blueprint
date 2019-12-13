import React from 'react';
import PropTypes from 'prop-types';
import styles from './paragraph.module.scss';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

const Paragraph = ({ text, className, theme, children }) => (
  <div className={styles[`theme-${theme}`]}>
    <p className={`${styles.paragraph} ${className}`}>
      {/* <strong className={`${styles.textHighlighted} ${styles[`theme-${theme}`]}`}> */}
      {children || text}
      {/* </strong> */}
    </p>
  </div>
);

Paragraph.propTypes = {
  ...componentPropTypes,
  text: PropTypes.string,
  children: PropTypes.node,
};

Paragraph.defaultProps = {
  ...defaultComponentPropTypes,
};

export default Paragraph;
