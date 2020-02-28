import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './button.module.scss';

export default class Button extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    onClickFunction: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']).isRequired,
    underneathLabel: PropTypes.string,
    disabled: PropTypes.bool,
    url: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    containerClassName: '',
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
      children,
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>
          {type === 'link' && url ? (
            <a href={url} className={`${className} ${styles.linkButton}`}>
              {text || children}
            </a>
          ) : (
            <div className={styles.buttonGroup}>
              <button
                type={type}
                className={`${className} ${styles.button}`}
                onClick={onClickFunction}
                disabled={disabled}
              >
                {text || children}
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
