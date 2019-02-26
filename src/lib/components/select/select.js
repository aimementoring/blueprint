import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-select';

export default class Select extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    classNameFromParent: PropTypes.string,
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
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
    onChangeFunction: () => {},
    className: '',
    classNameFromParent: '',
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
      classNameFromParent,
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

    let selectedValue = null;
    if (isMulti) {
      selectedValue =
        value && value.length ? options.filter(option => value.indexOf(option.value) > -1) : [];
    } else {
      selectedValue = value ? options.find(option => option.value === value) : null;
    }

    return (
      <div className={classNameFromParent}>
        <Dropdown
          placeholder={placeholder}
          className={className}
          styles={customStyles}
          onChange={this.handleChange}
          options={options}
          value={selectedValue}
          isMulti={isMulti}
          isClearable={isClearable}
          isDisabled={disabled}
          isSearchable={searchable}
          isOptionDisabled={option => option.disabled}
          joinValues={joinValues}
          defaultValue={defaultValues}
        />
      </div>
    );
  }
}
