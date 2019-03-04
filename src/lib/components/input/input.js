import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

export default class Input extends PureComponent {
  static propTypes = {
    classNameFromParent: PropTypes.string,
    classNameInputFromParent: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    autoComplete: PropTypes.string,
    onChangeFunction: PropTypes.func,
  };

  static defaultProps = {
    classNameFromParent: null,
    classNameInputFromParent: null,
    placeholder: '',
    disabled: false,
    required: true,
    value: '',
    type: 'text',
    onChangeFunction: () => {},
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
      autoComplete,
    } = this.props;

    return (
      <div className={`${classNameFromParent} ${styles.inputWrapper}`}>
        <input
          placeholder={placeholder}
          className={`${classNameInputFromParent} ${styles.input}`}
          value={value}
          name={name}
          type={type}
          required={required}
          onChange={this.handleChange(name)}
          autocomplete={autoComplete}
          disabled={disabled ? 'disabled' : ''}
        />
      </div>
    );
  }
}
