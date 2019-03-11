import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-select';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import { selectProps, selectDefaultProps } from './selectProps.ignore';
import { withValidation } from '../../utils/hocs';
import stylesCss from './select.module.scss';

class Select extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    ...selectProps,
    // props from withValidation HOC
    getValidationMessage: PropTypes.func,
    handleValidations: PropTypes.func.isRequired,
    isValidationOk: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    ...selectDefaultProps,
  };

  handleChange = value => {
    const { onChangeFunction, name } = this.props;
    if (value) {
      const newValue = value.length ? value.map(item => item.value) : value.value;
      const isWrongValidation = this.props.handleValidations(value);
      onChangeFunction(name, newValue, isWrongValidation);
    }
  };

  render() {
    const {
      placeholder,
      options,
      className,
      containerClassName,
      theme,
      isMulti,
      isClearable,
      disabled,
      searchable,
      styles,
      joinValues,
      defaultValues,
      borderColor,
      borderColorInError,
      error,
      isValidationOk,
      getValidationMessage,
    } = this.props;
    let { value } = this.props;

    if (error) {
      delete styles.control.border;
    }

    const customStyles = {
      control: (base, state) => ({
        ...base,
        maxHeight: '60px',
        borderColor: error ? borderColorInError : borderColor,
        boxShadow: state.isFocused ? null : null,
        '&:hover': {
          // Overwrittes the different states of border
          borderColor: error ? borderColorInError : borderColor,
        },
        '&:focus': {
          // Overwrittes the different states of border
          borderColor: error ? borderColorInError : borderColor,
        },
        ...styles.control,
      }),
      // Text when you write
      input: base => ({
        ...base,
        ...styles.input,
      }),
      // Single value selected
      singleValue: base => ({
        ...base,
        ...styles.singleValue,
      }),
      menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,
        width: '100%',
        ...styles.menu,
      }),
      menuList: base => ({
        ...base,
        padding: 0,
        ...styles.menuList,
      }),
    };

    if (isMulti) {
      value =
        value && value.length
          ? options.filter(option => value.indexOf(option.value) > -1)
          : [];
    } else {
      value = value ? options.find(option => option.value === value) : null;
    }

    return (
      <div className={`${containerClassName} 
          ${stylesCss[`theme-${theme}`]} ${stylesCss.wrapper}`}>
        <Dropdown
          placeholder={placeholder}
          className={`${className} ${isValidationOk() && styles.error}`}
          styles={customStyles}
          onChange={this.handleChange}
          options={options}
          value={value}
          isMulti={isMulti}
          isClearable={isClearable}
          isDisabled={disabled}
          isSearchable={searchable}
          isOptionDisabled={option => option.disabled}
          joinValues={joinValues}
          defaultValue={defaultValues}
        />
        {isValidationOk() &&
          <span className={stylesCss.errorMessage}>{getValidationMessage()}</span>}
      </div>
    );
  }
}

export default withValidation(Select);
