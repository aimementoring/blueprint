import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import {
  withLiveEdit,
  withLiveEditScope,
} from 'storybook-addon-react-live-edit';
import Button from './button';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'Button',
  component: Button,
  decorators: [_ => withLiveEditScope({ React, Button })(_, { React, Button })],
  parameters: {
    notes: 'My super custom button',
    jest: ['button.test.js'],
    componentSubtitle:
      'Different buttons types to be used with according styles for the selected theme',
  },
};

const typeOptions = {
  link: 'link',
  button: 'button',
};

/**
 * Action Button Description??
 */
export const ActionButton = () => (
  <Button
    type={select('type', typeOptions, 'button')}
    onClickFunction={action('clicked')}
    theme={select('theme', themeOptions, 'storm')}
    disabled={boolean("Disabled", false)}
  >
    {text('ActionName', 'Action')}
  </Button>
);

export const LinkButton = () => (
  <Button
    type={select('type', typeOptions, 'link')}
    url="www.aimementoring.com"
    disabled={boolean("Disabled", false)}
    theme={select('theme', themeOptions, 'base')}
  >
    <span role="img" aria-label="Link">
      🔗
    </span>{' '}
    Link Button
  </Button>
);

export const WithLabelUnderneathButton = () => (
  <Button
    type={select('type', typeOptions, 'button')}
    onClickFunction={action('clicked')}
    underneathLabel={text('underneathLabel', 'Label here...')}
    theme={select('theme', themeOptions, 'storm')}
    disabled={boolean("Disabled", false)}
  >
    {text('underneathAction', 'With Label underneath')}
  </Button>
);

export const LiveEdit = (_) => withLiveEdit(`
  return (
    <Button
      type='button'
      underneathLabel='Label here...'
      theme='storm'
      disabled={false}
    >
      'With Label underneath'
    </Button>
  );
`)(_);
