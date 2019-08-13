import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

const titleTypeClass = {
  gradient: styles.gradientTitle,
  blockTitle: styles.blockTitle,
  mainTitle: styles.mainTitle,
  h1Title: styles.h1Title,
  h2Title: styles.h2Title,
  h3Title: styles.h3Title,
  h4Title: styles.h4Title,
  h5Title: styles.h5Title,
  h6Title: styles.h6Title,
};

export default class Title extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    text: PropTypes.string,
    // setting up headings as per design system but they will probably change again
    type: PropTypes.oneOf(['gradient', 'blockTitle', 'mainTitle', 'h1Title', 'h2Title', 'h3Title', 'h4Title', 'h5Title', 'h6Title']),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    type: 'gradient',
  };

  render() {
    const {
      text,
      type,
      className,
      theme,
      children,
    } = this.props;

    const titleClass = titleTypeClass[type];

    return (
      <div className={styles[`theme-${theme}`]}>
        <span className={`${titleClass} ${className}`}>{children || text}</span>
      </div>
    );
  }
}
