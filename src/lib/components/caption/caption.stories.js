import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import Caption from './caption';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'Caption',
  component: Caption,
  parameters: {
    jest: ['caption.test.js'],
  },
};

/**
 * Action Button Description??
 */
export const ChildrenText = () => (
  <Caption theme={select('theme', themeOptions, 'base')}>
    {text('childrenText', 'We do not want to inherit a world that is in pain. We do not want to stare down huge inequality feeling powerless to our fate.')}
  </Caption>
);

export const TextProperty = () => (
  <Caption
    theme={select('theme', themeOptions, 'base')}
    text={text('textProperty', 'Location contract TBC')}
  />
);
