import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './title.module.scss';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

const titleTypeClass = {
  blockTitle: {
    style: styles.blockTitle,
    tag: 'span',
  },
  mainTitle: {
    style: styles.mainTitle,
    tag: 'span',
  },
  h1Title: {
    style: styles.h1Title,
    tag: 'h1',
  },
  h2Title: {
    style: styles.h2Title,
    tag: 'h2',
  },
  h3Title: {
    style: styles.h3Title,
    tag: 'h3',
  },
  h4Title: {
    style: styles.h4Title,
    tag: 'h4',
  },
  h5Title: {
    style: styles.h5Title,
    tag: 'h5',
  },
  headingLockup: {
    style: styles.headingLockup,
    tag: 'h1',
  },
};

class Title extends PureComponent {
  render() {
    const { text, type, className, containerClassName, theme, children } = this.props;

    const { style, tag: Component } = titleTypeClass[type] || { style: {}, tag: 'span' };

    return (
      <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
        <Component className={classNames(style, className)}>{children || text}</Component>
      </div>
    );
  }
}

Title.propTypes = {
  ...componentPropTypes,
  text: PropTypes.string,
  // setting up headings as per design system but they will probably change again
  type: PropTypes.oneOf([
    'h1Title',
    'h2Title',
    'h3Title',
    'h4Title',
    'h5Title',
    'blockTitle',
    'mainTitle',
    'headingLockup',
  ]),
  children: PropTypes.node,
};

Title.defaultProps = {
  ...defaultComponentPropTypes,
  type: 'h1Title',
};

export default Title;
