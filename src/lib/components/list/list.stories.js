import React from 'react';
import { select } from '@storybook/addon-knobs';
import List from './list';

const themeOptions = {
  storm: 'storm',
  base: 'base',
  rainbow: 'rainbow',
  plain: 'plain',
};

const typeOptions = {
  ulList: 'ulList',
  olList: 'olList',
};

export default {
  title: 'List',
  parameters: {
    jest: ['list.test.js'],
  },
};

export const UlList = () => (
  <List
    type={select('type', typeOptions, 'ulList')}
    list={[
      'Item 1',
      "Want to change the world? We're recruiting mentors across Australia, Uganda and South Africa RIGHT NOW! That could be you! Join forces with AIME and together, we'll shape a brighter future and lift kids out of inequality. Click the button to learn more about becoming a mentor. And if you're in the USA or Nigeria, look out - we're coming for you real real soon.",
      'Item 3',
      'Item 4',
    ]}
    theme={select('theme', themeOptions, 'base')}
  />
);

export const OrderedList = () => (
  <List
    type={select('type', typeOptions, 'olList')}
    list={[
      'Numbered Item 1',
      'Numbered Item 2',
      "Want to change the world? We're recruiting mentors across Australia, Uganda and South Africa RIGHT NOW! That could be you! Join forces with AIME and together, we'll shape a brighter future and lift kids out of inequality. Click the button to learn more about becoming a mentor. And if you're in the USA or Nigeria, look out - we're coming for you real real soon.",
      'Numbered Item 4',
    ]}
    theme={select('theme', themeOptions, 'base')}
  />
);
