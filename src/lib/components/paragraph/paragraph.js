import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './paragraph.module.scss';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

const paragraphTypeClass = {
  // gradient: styles.gradientparagraph,
  // blockparagraph: styles.blockparagraph,
  paragraph: styles.paragraph,
};

export default class paragraph extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    text: PropTypes.string,
    type: PropTypes.oneOf(['gradient', 'blockparagraph', 'paragraph']),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    // type: 'gradient',
  };

  render() {
    const { text, type, className, theme, children } = this.props;
    const paragraphClass = paragraphTypeClass[type];
    return (
      <div className={styles[`theme-${theme}`]}>
        <span className={`${paragraphClass} ${className}`}>{children || text}</span>
      </div>
    );
  }
}
