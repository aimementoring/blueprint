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
    value: PropTypes.string,
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
    styles: PropTypes.shape({
      control: PropTypes.shape({}),
      menu: PropTypes.shape({}),
      menuList: PropTypes.shape({}),
    }),
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
    },
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
    } = this.props;

    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: '#fef6ff',
        border: '1px solid #550D940px',
        maxHeight: '60px',
        borderColor: this.props.error ? '#DC143C' : '#7603DB',
        boxShadow: state.isFocused ? null : null,
        ...styles.control,
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
      <div className={classNameFromParent}>
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
        />
      </div>
    );
  }
}
