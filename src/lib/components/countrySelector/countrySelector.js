import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countryCollection from './countryCollection';
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
    onChangeFunction: () => {},
    value: '',
    name: 'country-name',
  };

  state = {
    countries: [],
  };

  componentDidMount() {
    const countries = countryCollection();
    this.setState({ countries });
  }

  render() {
    const { countries } = this.state;
    const { classNames, placeholder, onChangeFunction, containerClassNames, name } = this.props;
    let { value } = this.props;
    if (!value || !countries.find(country => country.text === value)) {
      value = '';
    }
    let countryOptions = [];
    if (countries.length) {
      countryOptions = countries.map(country => ({
        label: country.text,
        value: country.text,
        disabled: country.disabled,
      }));
    }
    countryOptions.unshift({
      label: placeholder,
      value: '',
      disabled: true,
    });

    return (
      <Select
        placeholder={placeholder}
        name={name}
        className={classNames}
        classNameFromParent={containerClassNames}
        onChangeFunction={onChangeFunction}
        value={value}
        options={countryOptions}
        required
      />
    );
  }
}
