import React from 'react';
import CountryFlag from './countryFlag';

export default {
  title: 'CountryFlag',
  component: CountryFlag,
  parameters: {
    jest: ['countryFlag.test.js'],
  },
};

export const uppercase = () => (
  <CountryFlag country="AR" />
);

export const capitalised = () => (
  <CountryFlag country="Au" />
);

export const lowercase = () => (
  <CountryFlag country="es" />
);
