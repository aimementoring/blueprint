import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

const titleTypeClass = {
  gradient: styles.gradientTitle,
  blockTitle: styles.blockTitle,
  mainTitle: styles.mainTitle,
};

export default class Title extends PureComponent {
  static propTypes = {
    classNameFromParent: PropTypes.string,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['gradient', 'blockTitle', 'mainTitle']),
  };

  static defaultProps = {
    classNameFromParent: '',
    type: 'gradient',
  };

  render() {
    const { text, type, classNameFromParent } = this.props;
    const titleClass = titleTypeClass[type];
    return <span className={`${titleClass} ${classNameFromParent}`}>{text}</span>;
  }
}
