import React, { useState } from 'react';
import Checkbox from './checkbox';

export default {
  title: 'Checkbox',
  parameters: {
    jest: ['checkbox.test.js'],
  },
};

export const defaultCheckbox = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <Checkbox
      elementClassName="classname"
      onChangeFunction={(_name, value) => setCheckbox(value)}
      placeholder="Accept terms and conditions"
      name="checkbox"
      customId="checkbox"
      value={checkbox}
    />
  );
};

export const customThemeCheckbox = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <Checkbox
      elementClassName="classname"
      onChangeFunction={(_name, value) => setCheckbox(value)}
      placeholder="Accept terms and conditions"
      name="checkbox"
      customId="checkbox"
      value={checkbox}
      theme="base"
    />
  );
};
