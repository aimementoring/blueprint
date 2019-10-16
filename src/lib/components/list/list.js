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

class List extends PureComponent {
  render() {
    const {
      list,
      type,
      className,
      containerClassName,
      theme,
    } = this.props;

    const { style, tag: Component } = listTypeClass[type];

    return (
      <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
        <Component className={classNames(style, className)}>
          {list && list.map(item => <li>{item}</li>)}
        </Component>
      </div>
    );
  }
}

List.propTypes = {
  ...componentPropTypes,
  list: PropTypes.array,
  type: PropTypes.oneOf(['ulList', 'olList']),
};

List.defaultProps = {
  ...defaultComponentPropTypes,
  type: 'ulList',
};

export default List;
