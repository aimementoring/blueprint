import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import LabeledInput from './labeledInput';
import { validateEmail } from '../../utils/validation';

export default {
  title: 'LabeledInput',
  parameters: {
    jest: ['labeledInput.test.js'],
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
    <LabeledInput
      placeholder="Light theme"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
    />
  );
};

export const requiredInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <LabeledInput
      name="required"
      value={inputValue}
      onChangeFunction={(_name, value) => setInputValue(value)}
      label="Required input"
      required
      theme={select('theme', themeOptions, 'rainbow')}
    />
  );
};

export const withErrorInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <LabeledInput
      name="error"
      value={inputValue}
      onChangeFunction={(_name, value) => setInputValue(value)}
      label="With error"
      error="Required input"
      theme={select('theme', themeOptions, 'rainbow')}
    />
  );
};

export const emailInput = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <LabeledInput
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
    <LabeledInput
      placeholder="I am read only. Don't try to change me!"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
      readOnly
    />
  );
};
