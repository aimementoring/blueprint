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
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['gradient', 'blockTitle', 'mainTitle']),
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    type: 'gradient',
  };

  render() {
    const { text, type, className, theme } = this.props;
    const titleClass = titleTypeClass[type];
    return (
      <div className={styles[`theme-${theme}`]}>
        <span className={`${titleClass} ${className}`}>{text}</span>
      </div>
    );
  }
}
