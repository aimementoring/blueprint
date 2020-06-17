import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { withLiveEdit, withLiveEditScope } from 'storybook-addon-react-live-edit';
import Checkbox from './checkbox';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [_ => withLiveEditScope({ React, Checkbox })(_, { React, Checkbox })],
  parameters: {
    jest: ['checkbox.test.js'],
  },
};

export const defaultCheckbox = () => {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <Checkbox
      elementClassName="classname"
      theme={select('theme', themeOptions, 'storm')}
      onChangeFunction={(_name, value) => setCheckbox(value)}
      placeholder="Accept terms and conditions"
      name="checkbox"
      customId="checkbox"
      value={checkbox}
      disabled={boolean("Disabled", false)}
      readOnly={boolean("ReadOnly", false)}
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
      theme={select('theme', themeOptions, 'storm')}
      disabled={boolean("Disabled", false)}
      readOnly={boolean("ReadOnly", false)}
    />
  );
};

export const LiveEdit = (_) => withLiveEdit(`
  const updateValue = (name, value) => {
    console.log({ name, value });
  };

  return (
    <Checkbox
      elementClassName="classname"
      onChangeFunction={updateValue}
      placeholder="Accept terms and conditions"
      name="checkbox"
      customId="checkbox"
      value={true}
      theme='storm'
      disabled={false}
      readOnly={false}
    />
  );
`)(_);
