import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import styles from './snackbar.module.scss';

const WarningSVG = (
  <svg
    class={styles.svgIcon}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
  </svg>
);

const ErrorSVG = (
  <svg
    class={styles.svgIcon}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" />
  </svg>
);

const InfoSVG = (
  <svg
    class={styles.svgIcon}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" />
  </svg>
);

const SuccessSVG = (
  <svg
    class={styles.svgIcon}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
  >
    <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
  </svg>
);

const ICONS_BY_TYPE = {
  warning: WarningSVG,
  error: ErrorSVG,
  info: InfoSVG,
  success: SuccessSVG,
};

class Snackbar extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
    message: PropTypes.string,
    action: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    type: null,
    message: 'Your notification here.',
    action: 'Got it',
  };

  state = {
    visible: true,
  };

  hideSnackbar = () => {
    this.setState({ visible: false });
  };

  render() {
    const { theme, type, message, action } = this.props;
    return (
      <div className={styles[`theme-${theme}`]}>
        <div
          className={`${styles.container} ${this.state.visible &&
            styles.entered}`}
        >
          <div className={styles.wrapper}>
            <div className={styles.wrapperInner}>
              <div className={styles.snackbar}>
                <div
                  className={`${styles.snackbarContent} ${type &&
                    styles[type]}`}
                  role="alertdialog"
                  aria-describedby="client-snackbar"
                >
                  <div className={styles.message}>
                    <span
                      id="client-snackbar"
                      className={styles.messageContent}
                    >
                      {ICONS_BY_TYPE[type] || null}
                      {message}
                    </span>
                  </div>
                  <div className={styles.action}>
                    <button
                      className={styles.actionText}
                      tabindex="0"
                      type="button"
                      onClick={this.hideSnackbar}
                    >
                      <span className={styles.label}>{action}</span>
                      <span className={styles.ripple} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Snackbar;
