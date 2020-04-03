import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import countriesList from '../countrySelector/countryCollection.ignore';
import Select from '../select';
import CountryFlag from '../countryFlag';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import styles from './countryFlagSelector.module.scss';

const CountryFlagSelector = ({
  className,
  containerClassName,
  name,
  onChangeFunction,
  theme,
  value,
}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(
      countriesList.map(country => ({
        value: country.code,
        label: (
          <CountryFlag country={country.code} number={country.phoneCode} />
        ),
      })),
    );
  }, []);

  const handleChange = (_, code) => {
    const country = countriesList.find(item => item.code === code);
    onChangeFunction(name, country);
  };

  const customStyles = {
    dropdownIndicator: base => ({
      ...base,
      display: 'none',
    }),
  };

  return (
    <div className={classNames(styles[`theme-${theme}`], containerClassName)}>
      <Select
        placeholder=""
        name={name}
        className={`${styles.select} ${className}`}
        containerClassName={`${styles.selectContainer}`}
        onChangeFunction={handleChange}
        value={
          !value || !countries.find(country => country.text === value)
            ? null
            : value
        }
        options={countries}
        required
        customStyles={customStyles}
        styles={customStyles}
      />
    </div>
  );
};

CountryFlagSelector.propTypes = {
  ...componentPropTypes,
  onChangeFunction: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

CountryFlagSelector.defaultProps = {
  ...defaultComponentPropTypes,
  onChangeFunction: () => {},
  value: '',
  name: 'country-name',
  containerClassName: '',
};

export default CountryFlagSelector;
