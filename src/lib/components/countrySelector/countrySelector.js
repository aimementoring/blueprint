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

    return (
      <Select
        placeholder={placeholder}
        name={name}
        className={classNames}
        classNameFromParent={containerClassNames}
        onChangeFunction={onChangeFunction}
        value={value}
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {countries.length &&
          countries.map(country => (
            <option key={`country-name-${country.text}`} disabled={country.disabled}>
              {country.text}
            </option>
          ))}
      </Select>
    );
  }
}
