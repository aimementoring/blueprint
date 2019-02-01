import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './loading.module.scss';

export default class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { loading } = this.props;

    if (loading) {
      return (
        <div className={styles.loading}>
          <div className={`${styles.spin} ${styles.spinning}`}>
            <span className={`${styles.spinDot} ${styles.spinDotSpin}`}>
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      );
    }
    return null;
  }
}
