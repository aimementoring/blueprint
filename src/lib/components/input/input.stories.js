import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import Input from './input';
import { validateEmail } from '../../utils/validation';

export default {
  title: 'Input',
  parameters: {
    jest: ['input.test.js'],
  },
};

const themeOptions = {
  storm: 'storm',
  base: 'base',
  rainbow: 'rainbow',
  plain: 'plain',
};

export const input = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      placeholder="Light theme"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
    />
  );
};

export const emailInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      placeholder="You need to enter an email here"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
      validations={[validateEmail]}
    />
  );
};

export const readOnlyInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Input
      placeholder="I am read only. Don't try to change me!"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
      readOnly
    />
  );
};
