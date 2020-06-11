import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import styles from './button.module.scss';

export default class Button extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    onClickFunction: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset', 'link']),
    underneathLabel: PropTypes.string,
    disabled: PropTypes.bool,
    url: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_self']),
    children: PropTypes.node,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    type: 'button',
    containerClassName: '',
    onClickFunction: () => {},
    underneathLabel: null,
    disabled: false,
    target: '_self',
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
      target,
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>
          {type === 'link' && url ? (
            <a
              href={url}
              target={target}
              className={`${className} ${styles.linkButton}`}
            >
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
                <label className={styles.underneathLabel}>
                  {underneathLabel}
                </label>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
