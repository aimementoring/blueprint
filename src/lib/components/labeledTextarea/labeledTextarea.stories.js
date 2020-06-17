import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import LabeledTextarea from './labeledTextarea';
import { validateEmail } from '../../utils/validation';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'LabeledTextarea',
  component: LabeledTextarea,
  parameters: {
    jest: ['labeledTextarea.test.js'],
  },
};

export const textarea = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <LabeledTextarea
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
    <LabeledTextarea
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
    <LabeledTextarea
      name="error"
      value={inputValue}
      onChangeFunction={(_name, value) => setInputValue(value)}
      label="With error"
      error="Required input"
      theme={select('theme', themeOptions, 'rainbow')}
    />
  );
};

export const emailTextarea = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <LabeledTextarea
      placeholder="You need to enter an email here"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
      validations={[validateEmail]}
    />
  );
};

export const readOnlyTextarea = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <LabeledTextarea
      placeholder="I am read only. Don't try to change me!"
      value={inputValue}
      name="value"
      onChangeFunction={(_name, value) => setInputValue(value)}
      theme={select('theme', themeOptions, 'base')}
      readOnly
    />
  );
};
