import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export default class Button extends PureComponent {
  static propTypes = {
    containerClassNameFromParent: PropTypes.string,
    classNameFromParent: PropTypes.string,
    onClickFunction: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']).isRequired,
    underneathLabel: PropTypes.string,
    disabled: PropTypes.bool,
    url: PropTypes.string,
  };

  static defaultProps = {
    containerClassNameFromParent: '',
    classNameFromParent: '',
    onClickFunction: () => {},
    underneathLabel: null,
    disabled: false,
    url: null,
  };

  render() {
    const {
      containerClassNameFromParent,
      classNameFromParent,
      onClickFunction,
      text,
      type,
      underneathLabel,
      disabled,
      url,
    } = this.props;

    if (type === 'link' && url) {
      return (
        <a href={url} className={styles.linkButton}>
          {text}
        </a>
      );
    } else {
      return (
        <div className={`${styles.container} ${containerClassNameFromParent}`}>
          <div className={styles.buttonGroup}>
            <button
              type={type}
              className={`${classNameFromParent} ${styles.button}`}
              onClick={onClickFunction}
              disabled={disabled}
            >
              {text}
            </button>
            {underneathLabel && <label className={styles.underneathLabel}>{underneathLabel}</label>}
          </div>
        </div>
      );
    }
  }
}
