import React from 'react';
import getFlexStylesFromProps from './sectionUtils.ignore';
import styles from './section.module.scss';

const SectionStack = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`${styles.sectionStack} ${className}`}
      style={getFlexStylesFromProps(props)}
    >
      {children}
    </div>
  );
};

export default SectionStack;
