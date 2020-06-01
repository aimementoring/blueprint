import React, { useState } from 'react';
import CountryFlagSelector from './countryFlagSelector';

export default {
  title: 'CountryFlagSelector',
  parameters: {
    jest: ['countryFlagSelector.test.js'],
  },
};

export const countryFlagSelector = () => {
  const [flag, setFlag] = useState(true);
  return (
    <CountryFlagSelector
      value={flag}
      onChangeFunction={(_name, value) => setFlag(value)}
      name="country"
    />
  );
};
