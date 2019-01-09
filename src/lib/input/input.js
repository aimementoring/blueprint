import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

export default class Input extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    classNameFromParent: PropTypes.string,
    classNameInputFromParent: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChangeFunction: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    classNameFromParent: '',
    classNameInputFromParent: '',
    placeholder: '',
    disabled: false,
    required: true,
    onChangeFunction: () => {},
    name: '',
    value: '',
    type: 'text',
  };

  handleChange = name => event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.props.onChangeFunction(name, value);
  };

  render() {
    const {
      classNameFromParent,
      classNameInputFromParent,
      placeholder,
      disabled,
      required,
      name,
      value,
      type,
    } = this.props;
    return (
      <div className={`${styles.inputWrapper} ${classNameFromParent}`}>
        <input
          placeholder={placeholder}
          className={`${styles.input} ${classNameInputFromParent}`}
          value={value}
          name={name}
          type={type}
          required={required}
          onChange={this.handleChange(name)}
          disabled={disabled ? 'disabled' : ''}
        />
      </div>
    );
  }
}
