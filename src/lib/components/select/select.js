import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './select.module.scss';

export default class Select extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    classNameFromParent: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeFunction: PropTypes.func,
    required: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    classNameFromParent: '',
    placeholder: '',
    required: true,
    onChangeFunction: () => {},
    name: '',
    value: '',
  };

  handleChange = e => {
    this.props.onChangeFunction(this.props.name, e.target.value);
  };

  render() {
    const { className, classNameFromParent, placeholder, required, name, value } = this.props;
    return (
      <div className={`${styles.inputWrapper} ${classNameFromParent}`}>
        <select
          className={`${styles.select} ${styles.input} ${className}`}
          placeholder={placeholder}
          name={name}
          onChange={this.handleChange}
          value={value}
          required={required}
        >
          {this.props.children}
        </select>
      </div>
    );
  }
}
