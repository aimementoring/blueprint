import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './textbox.module.scss';

export default class TextBox extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: '',
    required: true,
    onChangeFunction: () => {},
    value: '',
  };

  handleChange = e => {
    this.props.onChangeFunction(this.props.name, e.target.value);
  };

  render() {
    const { containerClassName, placeholder, name, required, className, value, theme } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.inputWrapper} ${containerClassName}`}>
          <textarea
            className={`${styles.input} ${styles.textarea} ${className}`}
            placeholder={placeholder}
            onChange={this.handleChange}
            name={name}
            value={value}
            required={required || false}
          />
        </div>
      </div>
    );
  }
}
