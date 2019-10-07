import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './list.module.scss';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

const listTypeClass = {
  ulList: {
    style: styles.ulList,
    tag: 'ul',
  },
  olList: {
    style: styles.olList,
    tag: 'ol',
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
    } = this.props;

    const { style, tag: Component } = listTypeClass[type];

    return (
      <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
        <Component className={classNames(style, className)}>
          <li>{children || text}</li>
        </Component>
      </div>
    );
  }
}

Title.propTypes = {
  ...componentPropTypes,
  text: PropTypes.string,
  // setting up headings as per design system but they will probably change again
  type: PropTypes.oneOf(['ulList', 'olList']),
  children: PropTypes.node,
};

Title.defaultProps = {
  ...defaultComponentPropTypes,
  type: 'ulList',
};

export default Title;
