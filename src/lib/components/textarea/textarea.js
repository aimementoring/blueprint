import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import { withValidation } from '../../utils/hocs';
import styles from './textarea.module.scss';

class Textarea extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
    autoFocus: PropTypes.bool,
    // props from withValidation HOC
    renderValidationError: PropTypes.func.isRequired,
    handleValidations: PropTypes.func.isRequired,
    hasValidationError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: '',
    required: true,
    onChangeFunction: () => {},
    value: '',
  };

  handleChange = event => {
    const { onChangeFunction, name, handleValidations } = this.props;
    const value = event.target.value;
    const isWrongValidation = handleValidations(value);
    onChangeFunction(name, value, isWrongValidation);
  };

  render() {
    const {
      containerClassName,
      placeholder,
      name,
      required,
      className,
      value,
      theme,
      autoFocus,
      hasValidationError,
      renderValidationError,
      validationMessage,
      hasErrorAfterSubmit,
      getValidationMessage,
      onChangeFunction,
      handleValidations,
      ...textareaProps
    } = this.props;

    return (
      <div className={classNames(containerClassName, styles[`theme-${theme}`])}>
        <textarea
          className={`${hasValidationError() ? styles.error : ''}
            ${className} ${styles.input} ${styles.textarea}`}
          placeholder={placeholder}
          onChange={this.handleChange}
          name={name}
          value={value}
          required={required || false}
          autoFocus={autoFocus}
          {...textareaProps}
        />
        {renderValidationError()}
      </div>
    );
  }
}

export default withValidation(Textarea);
