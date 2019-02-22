import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countriesList from './countryCollection.ignore';
import Select from '../select';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './countrySelector.module.scss';

export default class CountrySelector extends Component {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string.isRequired,
    onChangeFunction: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    onChangeFunction: () => {},
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
    const { className, placeholder, containerClassName, name, theme } = this.props;
    let { value } = this.props;
    if (!value || !countries.find(country => country.text === value)) value = '';

    return (
      <div className={styles[`theme-${theme}`]}>
        <Select
          placeholder={placeholder}
          name={name}
          className={className}
          classNameFromParent={containerClassName}
          onChangeFunction={this.handleChange}
          value={value}
          options={countries}
          required
        />
      </div>
    );
  }
}
