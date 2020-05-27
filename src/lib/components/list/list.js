import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './list.module.scss';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';

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
      children,
      text,
    } = this.props;

    const { style, tag: Component } = listTypeClass[type];

    const listElements = children
      ? React.Children.toArray(children)
      : list || [text];

    return (
      <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
        <Component className={classNames(style, className)}>
          {listElements &&
            listElements.map((item, index) => (
              <li key={`${index}-${item}`}>{item}</li>
            ))}
        </Component>
      </div>
    );
  }
}

List.propTypes = {
  ...componentPropTypes,
  list: PropTypes.array,
  type: PropTypes.oneOf(['ulList', 'olList']),
  children: PropTypes.node,
};

List.defaultProps = {
  ...defaultComponentPropTypes,
  type: 'ulList',
};

export default List;
