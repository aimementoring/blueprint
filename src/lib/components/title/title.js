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
    const {
      text,
      type,
      align,
      className,
      containerClassName,
      theme,
      children,
      onClick,
    } = this.props;

    const { style, tag: Component } = titleTypeClass[type] || {
      classes: style,
      tag: 'span',
    };

    const capitalise = ([firstChar, ...rest]) =>
      `${firstChar.toLocaleUpperCase()}${rest.join('')}`;

    return (
      <div
        className={classNames(styles[`theme-${theme}`], containerClassName)}
        onClick={onClick}
      >
        <Component
          className={classNames(
            style,
            className,
            styles[`align${capitalise(align)}`],
          )}
        >
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
  align: PropTypes.oneOf(['center', 'left', 'right']),
  type: PropTypes.oneOf([
    'h1Title',
    'h2Title',
    'h3Title',
    'h4Title',
    'h5Title',
    'headingLockup',
  ]),
  children: PropTypes.node,
};

Title.defaultProps = {
  ...defaultComponentPropTypes,
  onClick: () => { },
  type: 'h1Title',
  align: 'left',
};

export default Title;
