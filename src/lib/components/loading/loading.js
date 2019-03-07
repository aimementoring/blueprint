import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

import styles from './loading.module.scss';

export default class Loading extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
  };

  render() {
    const { loading, theme, className, containerClassName } = this.props;

    if (loading) {
      return (
        <div className={styles[`theme-${theme}`]}>
          <div className={`${styles.loading} ${containerClassName}`}>
            <div className={`${styles.spin} ${styles.spinning} ${className}`}>
              <span className={`${styles.spinDot} ${styles.spinDotSpin}`}>
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
