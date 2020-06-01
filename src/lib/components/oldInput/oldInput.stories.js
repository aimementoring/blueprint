import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import OldInput from './oldInput';
import { validateEmail } from '../../utils/validation';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'OldInput',
  parameters: {
    jest: ['oldInput.test.js'],
  },
};

export const oldInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <OldInput
      placeholder="Name"
      value={inputValue}
      onChangeFunction={(_name, value) => setInputValue(value)}
      required={true}
      name="value"
      theme={select('theme', themeOptions, 'base')}
    />
  );
};

export const emailInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <OldInput
      placeholder="Email"
      value={inputValue}
      required={true}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      validations={[validateEmail]}
      theme={select('theme', themeOptions, 'base')}
    />
  );
};
