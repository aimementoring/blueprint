import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';

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
    const { loading, theme } = this.props;

    if (loading) {
      return (
        <div className={styles[`theme-${theme}`]}>
          <div className={styles.loading}>
            <svg
              className={styles.loadingSvg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9135F0" />
                  <stop offset="100%" stopColor="#5eaefd" />
                </linearGradient>
              </defs>
              <title>… Loading …</title>
              <g>
                <path
                  className={`${styles.loader} ${styles.letterA}`}
                  d="M76.92,469.91C76.92,219,280.35,15.53,531.3,15.53S985.68,219,985.68,469.91,782.25,924.29,531.3,924.29C365.73,924.29,132,773.82,178,626.51c0,0,96.6-318.12,120.56-329.3,33.49-15.62-.47,121.68,35.25,300.28"
                />
                <path
                  className={`${styles.loader} ${styles.letterADash}`}
                  d="M192.51,507.07s151.26-84.88,183.63-117.25"
                />
                <path
                  className={`${styles.loader} ${styles.letterI}`}
                  d="M435.86,334.05s-38,214.33-36.84,251.16"
                />
                <path
                  className={`${styles.loader} ${styles.letterM}`}
                  d="M456,590.79c20.1-27.9,52.56-219.9,73.72-218.79s26.75,168.56,42.38,167.45S668.6,296,694.28,296,648,602.51,659.12,643.82"
                />
                <path
                  className={`${styles.loader} ${styles.letterE}`}
                  d="M884.6,359.17s-79.81,29-107.72,46.32c-15.14,9.39-33.24,54.28-44.23,95.79-9.25,35-13.45,67.55-6.56,74.44,15.07,15.07,42.42,36.84,147.35-27.9"
                />
                <path
                  className={`${styles.loader} ${styles.letterEDash}`}
                  d="M732.65,501.28C764.05,508.19,850,480.84,850,480.84"
                />

                <path
                  className={`${styles.loader} ${styles.letterAA}`}
                  d="M76.92,469.91C76.92,219,280.35,15.53,531.3,15.53S985.68,219,985.68,469.91,782.25,924.29,531.3,924.29C365.73,924.29,132,773.82,178,626.51c0,0,96.6-318.12,120.56-329.3,33.49-15.62-.47,121.68,35.25,300.28"
                />
                <path
                  className={`${styles.loader} ${styles.letterAADash}`}
                  d="M192.51,507.07s151.26-84.88,183.63-117.25"
                />
                <path
                  className={`${styles.loader} ${styles.letterII}`}
                  d="M435.86,334.05s-38,214.33-36.84,251.16"
                />
                <path
                  className={`${styles.loader} ${styles.letterMM}`}
                  d="M456,590.79c20.1-27.9,52.56-219.9,73.72-218.79s26.75,168.56,42.38,167.45S668.6,296,694.28,296,648,602.51,659.12,643.82"
                />
                <path
                  className={`${styles.loader} ${styles.letterEE}`}
                  d="M884.6,359.17s-79.81,29-107.72,46.32c-15.14,9.39-33.24,54.28-44.23,95.79-9.25,35-13.45,67.55-6.56,74.44,15.07,15.07,42.42,36.84,147.35-27.9"
                />
                <path
                  className={`${styles.loader} ${styles.letterEEDash}`}
                  d="M732.65,501.28C764.05,508.19,850,480.84,850,480.84"
                />
              </g>
            </svg>
          </div>
        </div>
      );
    }
    return null;
  }
}
