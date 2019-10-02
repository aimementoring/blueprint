import React from 'react';
import PropTypes from 'prop-types';
import styles from './countryFlag.module.scss';

const CountryFlag = ({ country, number }) => (
  <span>
    <span className={styles[`flagIcon${country.toLowerCase()}`]} />
    {number && <span className={styles.countryPrefix}>+{number}</span>}
  </span>
);

CountryFlag.propTypes = {
  country: PropTypes.string.isRequired,
  number: PropTypes.string,
};

CountryFlag.defaultProps = {
  number: false,
};

export default CountryFlag;
