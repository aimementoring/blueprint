import React from 'react';
import getFlexStylesFromProps from './sectionUtils.ignore';
import styles from './section.module.scss';

const SectionRow = ({ children, className = '', ...props }) => {
  return (
    <div
      {...props}
      className={`${styles.sectionRow} ${className}`}
      style={getFlexStylesFromProps(props)}
    >
      {children}
    </div>
  );
};

export default SectionRow;
