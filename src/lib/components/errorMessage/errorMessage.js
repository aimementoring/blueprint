import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import styles from './errorMessage.module.scss';

class ErrorMessage extends React.PureComponent {
  static propTypes = {
    ...componentPropTypes,
    message: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    message: null,
  };

  render() {
    const { containerClassName, className, theme, message } = this.props;
    return (
      <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
        <div
          className={`${styles.textContainer} ${message ? styles.active : ''}`}
        >
          <span className={classNames(styles.errorMessage, className)}>
            {message}
          </span>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
