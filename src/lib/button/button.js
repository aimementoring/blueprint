import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

class Button extends PureComponent {
  static propTypes = {
    containerClassNameFromParent: PropTypes.string,
    classNameFromParent: PropTypes.string,
    onClickFunction: PropTypes.func,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    containerClassNameFromParent: '',
    classNameFromParent: '',
    onClickFunction: () => {},
  };

  render() {
    const {
      containerClassNameFromParent,
      classNameFromParent,
      onClickFunction,
      text,
      type,
    } = this.props;
    return (
      <div className={`${styles.container} ${containerClassNameFromParent}`}>
        <button
          type={type}
          className={`${classNameFromParent} ${styles.button}`}
          onClick={onClickFunction}
        >
          {text}
        </button>
      </div>
    );
  }
}

export default Button;
