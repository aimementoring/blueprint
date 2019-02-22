import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './button.module.scss';

export default class Button extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    onClickFunction: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']).isRequired,
    underneathLabel: PropTypes.string,
    disabled: PropTypes.bool,
    url: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    onClickFunction: () => {},
    underneathLabel: null,
    disabled: false,
    url: null,
  };

  render() {
    const {
      onClickFunction,
      text,
      type,
      underneathLabel,
      disabled,
      url,
      containerClassName,
      className,
      theme,
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.container} ${containerClassName}`}>
          {type === 'link' && url ? (
            <a href={url} className={`${className} ${styles.linkButton}`}>
              {text}
            </a>
          ) : (
            <div className={styles.buttonGroup}>
              <button
                type={type}
                className={`${className} ${styles.button}`}
                onClick={onClickFunction}
                disabled={disabled}
              >
                {text}
              </button>
              {underneathLabel && (
                <label className={styles.underneathLabel}>{underneathLabel}</label>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
