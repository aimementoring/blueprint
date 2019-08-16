import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import { withValidation } from '../../utils/hocs';
import { handleInputChange } from './utils.ignore';
import styles from './input.module.scss';

class Input extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChangeFunction: PropTypes.func,
    // props from withValidation HOC
    renderValidationError: PropTypes.func,
    handleValidations: PropTypes.func.isRequired,
    isValidationOk: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: '',
    disabled: false,
    required: true,
    value: '',
    type: 'text',
    onChangeFunction: () => {},
  };

  handleChange = name => event =>
    handleInputChange(event, name, this.props.handleValidations, this.props.onChangeFunction);

  render() {
    const {
      containerClassName,
      className,
      theme,
      placeholder,
      disabled,
      required,
      name,
      value,
      type,
      isValidationOk,
      renderValidationError,
      autoFocus,
    } = this.props;

    return (
      <div className={`${containerClassName} ${styles[`theme-${theme}`]} ${styles.inputWrapper}`}>
        <input
          placeholder={placeholder}
          className={`${isValidationOk() && styles.error} ${className} ${styles.input}`}
          value={value}
          name={name}
          type={type}
          required={required}
          onChange={this.handleChange(name)}
          disabled={disabled ? 'disabled' : ''}
          autoFocus={autoFocus}
        />
        {renderValidationError()}
      </div>
    );
  }
}

export default withValidation(Input);
