import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countriesList from './countryCollection';
import Select from '../select';

export default class CountrySelector extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    containerClassNames: PropTypes.string,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    onChangeFunction: () => { },
    value: '',
    name: 'country-name',
  };

  state = {
    countries: [],
  };

  componentDidMount() {
    const { placeholder } = this.props;
    this.setState({
      countries: [
        {
          value: '',
          label: placeholder,
          disabled: true,
        },
        ...countriesList.map(country => ({
          value: country.name,
          label: country.name,
        })),
      ],
    });
  }

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
    const { countries } = this.state;
    const { classNames, placeholder, containerClassNames, name } = this.props;
    let { value } = this.props;
    if (!value || !countries.find(country => country.text === value)) value = '';

    return (
      <Select
        placeholder={placeholder}
        name={name}
        className={classNames}
        classNameFromParent={containerClassNames}
        onChangeFunction={this.handleChange}
        value={value}
        options={countries}
        required
      />
    );
  }
}
