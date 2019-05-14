import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

const titleTypeClass = {
  gradient: styles.gradientTitle,
  blockTitle: styles.blockTitle,
  mainTitle: styles.mainTitle,
};

export default class Title extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    text: PropTypes.string,
    type: PropTypes.oneOf(['gradient', 'blockTitle', 'mainTitle']),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    type: 'gradient',
  };

  render() {
    const { text, type, className, theme, children } = this.props;
    const titleClass = titleTypeClass[type];
    return (
      <div className={styles[`theme-${theme}`]}>
        <span className={`${titleClass} ${className}`}>{children || text}</span>
      </div>
    );
  }
}
