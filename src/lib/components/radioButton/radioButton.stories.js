import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import RadioButton from './radioButton';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'RadioButton',
  parameters: {
    jest: ['radioButton.test.js'],
  },
};

export const defaultRadioButton = () => {
  const [radioValue, setRadioValue] = useState(null);
  const radioButtonsOptions = [
    {
      value: 'notReturningMentor',
      text: 'Yes this will be my first year as an AIME mentor and I can’t flippin’ wait!',
    },
    {
      value: 'returningMentor',
      text:
        'I’ve mentored with AIME before and will register with the same email I used then. I also can’t flippin’ wait!',
    },
  ];
  return (
    <RadioButton
      name="value"
      onChangeFunction={(_name, value) => setRadioValue(value)}
      inputName="returningMentor"
      options={radioButtonsOptions}
      value={radioValue}
      theme={select('theme', themeOptions, 'plain')}
    />
  );
};
