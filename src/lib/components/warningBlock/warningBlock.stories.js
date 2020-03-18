import React from 'react';
import { select } from '@storybook/addon-knobs';
import WarningBlock from './warningBlock';

const themeOptions = {
  storm: 'storm',
  base: 'base',
  rainbow: 'rainbow',
  plain: 'plain',
};

export default {
  title: 'WarningBlock',
  parameters: {
    jest: ['warningBlock.test.js'],
  },
};

export const block = () => (
  <WarningBlock theme={select('theme', themeOptions, 'plain')}>
    Ups! There was an error, please call your AIME key contact for more information
  </WarningBlock>
);
