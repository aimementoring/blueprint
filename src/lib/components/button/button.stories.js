import React from 'react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import Button from './button';

export default {
  title: 'Button',
  parameters: {
    notes: 'My super custom button',
    jest: ['button.test.js'],
    componentSubtitle:
      'Different buttons types to be used with according styles for the selected theme',
  },
};

const themeOptions = {
  storm: 'storm',
  base: 'base',
  rainbow: 'rainbow',
  plain: 'plain',
};

const typeOptions = {
  link: 'link',
  button: 'button',
};

/**
 * Action Button Description??
 */
export const ActionButton = () => (
  <Button type={select('type', typeOptions, 'button')} onClickFunction={action('clicked')}>
    Action
  </Button>
);

export const LinkButton = () => (
  <Button
    type={select('type', typeOptions, 'link')}
    url="www.aimementoring.com"
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
    underneathLabel="Label here..."
  >
    With Label underneath
  </Button>
);

export const StormThemeButton = () => (
  <Button
    type={select('type', typeOptions, 'button')}
    onClickFunction={action('clicked')}
    theme={select('theme', themeOptions, 'storm')}
  >
    Light theme
  </Button>
);

export const BaseThemeButton = () => (
  <Button
    type={select('type', typeOptions, 'button')}
    onClickFunction={action('clicked')}
    theme={select('theme', themeOptions, 'base')}
  >
    Base theme
  </Button>
);
