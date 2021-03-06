import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-select';
import flatten from 'lodash.flatten';
import classNames from 'classnames';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import { selectProps, selectDefaultProps } from './selectProps.ignore';
import { withValidation } from '../../utils/hocs';
import stylesCss from './select.module.scss';

class Select extends PureComponent {
  handleChange = value => {
    const { onChangeFunction, name, handleValidations } = this.props;
    if (value) {
      const newValue = value.length
        ? value.map(item => item.value)
        : value.value;
      const isWrongValidation = handleValidations(value);
      onChangeFunction(name, newValue, isWrongValidation);
    }
  };

  getValue = () => {
    const { withGroups, value, isMulti } = this.props;
    let { options } = this.props;
    let result = null;
    if (withGroups) options = flatten(options.map(group => group.options));

    if (isMulti) {
      result =
        value && value.length
          ? options.filter(option => value.indexOf(option.value) > -1)
          : [];
    } else {
      result = value ? options.find(option => option.value === value) : null;
    }
    return result;
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
      hasValidationError,
      renderValidationError,
    } = this.props;
    let { customStyles } = this.props;

    if (error) delete styles.control.border;

    customStyles = {
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
      ...customStyles,
    };

    return (
      <div
        className={classNames(
          containerClassName,
          stylesCss[`theme-${theme}`],
          stylesCss.wrapper,
        )}
      >
        <Dropdown
          placeholder={placeholder}
          className={classNames(className, {
            [styles.error]: hasValidationError(),
          })}
          styles={customStyles}
          onChange={this.handleChange}
          options={options}
          value={this.getValue()}
          isMulti={isMulti}
          isClearable={isClearable}
          isDisabled={disabled}
          isSearchable={searchable}
          isOptionDisabled={option => option.disabled}
          joinValues={joinValues}
          defaultValue={defaultValues}
        />
        {renderValidationError()}
      </div>
    );
  }
}

Select.propTypes = {
  ...componentPropTypes,
  ...selectProps,
  // props from withValidation HOC
  renderValidationError: PropTypes.func,
  handleValidations: PropTypes.func.isRequired,
  hasValidationError: PropTypes.func.isRequired,
  customStyles: PropTypes.object,
};

Select.defaultProps = {
  ...defaultComponentPropTypes,
  ...selectDefaultProps,
  customStyles: {},
};

export default withValidation(Select);
