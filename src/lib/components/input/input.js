import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import { withValidation } from '../../utils/hocs';
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
    onChangeFunction: PropTypes.func,
    // props from withValidation HOC
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
    onChangeFunction: () => { },
  };

  handleChange = name => event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { onChangeFunction, handleValidations } = this.props;
    const isWrongValidation = handleValidations(value);
    onChangeFunction(name, value, isWrongValidation);
  };

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
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${styles.inputWrapper} ${containerClassName}`}>
          <input
            placeholder={placeholder}
            className={`${className} ${styles.input} 
              ${isValidationOk() && styles.error}`}
            value={value}
            name={name}
            type={type}
            required={required}
            onChange={this.handleChange(name)}
            disabled={disabled ? 'disabled' : ''}
          />
        </div>
      </div>
    );
  }
}

export default withValidation(Input);
