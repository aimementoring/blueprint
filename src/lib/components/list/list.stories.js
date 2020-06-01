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

export const UlListCustomItem = () => (
  <List
    type={select('type', typeOptions, 'ulList')}
    theme={select('theme', themeOptions, 'base')}
  >
    <span>Know Yourself</span>
    <span>Brave Goals</span>
    <span>Rebelliousness</span>
  </List>
);

export const UlList = () => (
  <List
    type={select('type', typeOptions, 'ulList')}
    list={[
      'Know Yourself',
      'Brave Goals',
      'Rebelliousness',
    ]}
    theme={select('theme', themeOptions, 'base')}
  />
);

export const OrderedList = () => (
  <List
    type={select('type', typeOptions, 'olList')}
    list={[
      'Know Yourself',
      'Brave Goals',
      'Rebelliousness',
    ]}
    theme={select('theme', themeOptions, 'base')}
  />
);
