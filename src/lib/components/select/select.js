import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-select';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';

export default class Select extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onChangeFunction: PropTypes.func,
    isMulti: PropTypes.bool,
    error: PropTypes.bool,
    isClearable: PropTypes.bool,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
    styles: PropTypes.shape({
      control: PropTypes.shape({}),
      menu: PropTypes.shape({}),
      menuList: PropTypes.shape({}),
      input: PropTypes.shape({}),
      singleValue: PropTypes.shape({}),
    }),
    joinValues: PropTypes.bool,
    defaultValues: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
    borderColor: PropTypes.string,
    borderColorInError: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    onChangeFunction: () => {},
    isMulti: false,
    error: false,
    isClearable: false,
    disabled: false,
    searchable: true,
    styles: {
      control: {},
      menu: {},
      menuList: {},
      input: {},
      singleValue: {},
    },
    joinValues: false,
    defaultValues: [],
    borderColor: '#550d94',
    borderColorInError: '#DC143C',
  };

  handleChange = value => {
    const { onChangeFunction, name } = this.props;
    if (value) {
      const newValue = value.length
        ? value.map(identification => identification.value)
        : value.value;
      onChangeFunction(name, newValue);
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
      value,
      disabled,
      searchable,
      styles,
      joinValues,
      defaultValues,
      borderColor,
      borderColorInError,
    } = this.props;

    const customStyles = {
      control: (base, state) => ({
        ...base,
        maxHeight: '60px',
        borderColor: this.props.error ? borderColorInError : borderColor,
        boxShadow: state.isFocused ? null : null,
        '&:hover': {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? borderColorInError : borderColor,
        },
        '&:focus': {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? borderColorInError : borderColor,
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

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>
          <Dropdown
            placeholder={placeholder}
            className={className}
            styles={customStyles}
            onChange={this.handleChange}
            options={options}
            value={value && options.filter(option => option.value === value)}
            isMulti={isMulti}
            isClearable={isClearable}
            isDisabled={disabled}
            isSearchable={searchable}
            isOptionDisabled={option => option.disabled}
            joinValues={joinValues}
            defaultValues={defaultValues}
          />
        </div>
      </div>
    );
  }
}
