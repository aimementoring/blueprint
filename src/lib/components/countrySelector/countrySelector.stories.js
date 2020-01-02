import React from 'react';
import CountrySelector from './countrySelector';

export default {
  title: 'CountrySelector',
  parameters: {
    jest: ['countrySelector.test.js'],
  },
};

export const selector = () => (
  <CountrySelector placeholder="Select a country" onChangeFunction={() => {}} name="country" />
);
