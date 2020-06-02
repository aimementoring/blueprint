import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './title.module.scss';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';

const titleTypeClass = {
  h1Title: {
    classes: [styles.h1Title],
    tag: 'h1',
  },
  h2Title: {
    classes: [styles.h2Title],
    tag: 'h2',
  },
  h3Title: {
    classes: [styles.h3Title],
    tag: 'h3',
  },
  h4Title: {
    classes: [styles.h4Title],
    tag: 'h4',
  },
  h5Title: {
    classes: [styles.h5Title],
    tag: 'h5',
  },
  headingLockup: {
    classes: [styles.headingLockup, styles.headingLockupLeft],
    tag: 'h1',
  },
  headingLockupCenter: {
    classes: [styles.headingLockup, styles.headingLockupCenter],
    tag: 'h1',
  },
  headingLockupRight: {
    classes: [styles.headingLockup, styles.headingLockupRight],
    tag: 'h1',
  },
  headingLockupLeft: {
    classes: [styles.headingLockup, styles.headingLockupLeft],
    tag: 'h1',
  },
};

class Title extends PureComponent {
  render() {
    const {
      text,
      type,
      className,
      containerClassName,
      theme,
      children,
      onClick,
    } = this.props;

    const { classes, tag: Component } = titleTypeClass[type] || {
      classes: [classes],
      tag: 'span',
    };

    return (
      <div
        className={classNames(styles[`theme-${theme}`], containerClassName)}
        onClick={onClick}
      >
        <Component className={classNames([...classes], className)}>
          {children || text}
        </Component>
      </div>
    );
  }
}

Title.propTypes = {
  ...componentPropTypes,
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'h1Title',
    'h2Title',
    'h3Title',
    'h4Title',
    'h5Title',
    'headingLockup',
    'headingLockupCenter',
    'headingLockupRight',
    'headingLockupLeft',
  ]),
  children: PropTypes.node,
};

Title.defaultProps = {
  ...defaultComponentPropTypes,
  onClick: () => {},
  type: 'h1Title',
};

export default Title;
