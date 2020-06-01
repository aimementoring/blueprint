import React from 'react';
import { select } from '@storybook/addon-knobs';
import Caption from './caption';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'Caption',
  parameters: {
    jest: ['caption.test.js'],
  },
};

/**
 * Action Button Description??
 */
export const ActionButton = () => (
  <Caption theme={select('theme', themeOptions, 'base')}>
    We do not want to inherit a world that is in pain. We do not want to stare down huge inequality feeling powerless to our fate.
  </Caption>
);

export const LinkButton = () => (
  <Caption
    theme={select('theme', themeOptions, 'base')}
    text="Location contract TBC"
  />
);
