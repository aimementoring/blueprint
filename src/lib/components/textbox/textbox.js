import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './textbox.module.scss';

export default class TextBox extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    containerElementClassName: PropTypes.string,
    className: PropTypes.string,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
    required: true,
    containerElementClassName: '',
    className: '',
    onChangeFunction: () => {},
    value: '',
  };

  handleChange = e => {
    this.props.onChangeFunction(this.props.name, e.target.value);
  };

  render() {
    const { containerElementClassName, placeholder, name, required, className, value } = this.props;

    return (
      <div className={`${styles.inputWrapper} ${containerElementClassName}`}>
        <textarea
          className={`${styles.input} ${styles.textarea} ${className}`}
          placeholder={placeholder}
          onChange={this.handleChange}
          name={name}
          value={value}
          required={required || false}
        />
      </div>
    );
  }
}
