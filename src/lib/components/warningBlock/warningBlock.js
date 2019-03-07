import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './warningBlock.module.scss';

export default class WarningBlock extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
  };

  render() {
    const { theme, children, className } = this.props;
    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.warningBlock} ${className}`}>{children}</div>
      </div>
    );
  }
}
