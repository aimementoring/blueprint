import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import Textarea from './textarea';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'Textarea',
  component: Textarea,
  parameters: {
    jest: ['textarea.test.js'],
  },
};

export const textarea = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Textarea
      placeholder="Light theme"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
    />
  );
};

export const requiredTextarea = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Textarea
      name="required"
      value={inputValue}
      onChangeFunction={(_name, value) => setInputValue(value)}
      label="Required input"
      required
      theme={select('theme', themeOptions, 'rainbow')}
    />
  );
};

export const withErrorTextarea = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Textarea
      name="error"
      value={inputValue}
      onChangeFunction={(_name, value) => setInputValue(value)}
      label="With error"
      error="Required input"
      theme={select('theme', themeOptions, 'rainbow')}
    />
  );
};

export const readOnlyTextarea = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <Textarea
      placeholder="I am read only. Don't try to change me!"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
      readOnly
    />
  );
};
