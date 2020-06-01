import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import PhoneInput from './phoneInput';
import { getFormattedMobilePhone } from "../../utils/validation/validation";
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'PhoneInput',
  parameters: {
    jest: ['phoneInput.test.js'],
  },
};

export const phoneInput = () => {
  const [phone, setPhone] = useState('');
  const [formatted, setFormatted] = useState(null);

  const updatePhone = (name, value) => {
    const formatted = getFormattedMobilePhone(value, "AU");
    setPhone(value);
    setFormatted(formatted);
  };

  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChangeFunction={updatePhone}
        theme={select('theme', themeOptions, 'base')}
        defaultCountry="AU"
      />
      {formatted && phone && (
        <div style={{ display: "block" }}>
          <div>Country: {formatted.country}</div>
          <div>Country calling code: {formatted.countryCallingCode}</div>
          <div>National number: {formatted.nationalNumber}</div>
          <div>Number: {formatted.number}</div>
          <div>Type: {formatted.getType()}</div>
          <div>Valid: {formatted.isValid() ? "true" : "false"}</div>
          <div>Possible: {formatted.isPossible() ? "true" : "false"}</div>
        </div>
      )}
    </div>
  );
};
