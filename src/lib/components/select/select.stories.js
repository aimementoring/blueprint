import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import Select from './select';

const themeOptions = {
  storm: 'storm',
  base: 'base',
  rainbow: 'rainbow',
  plain: 'plain',
};

export default {
  title: 'Select',
  parameters: {
    jest: ['select.test.js'],
  },
};

export const SingleValueSelect = () => {
  const [selectValue, setSelectValue] = useState(null);
  const selectOptions = [
    { value: 'Select an option', label: 'Select an option' },
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' },
  ];
  return (
    <Select
      placeholder="Select an option"
      name="singleValue"
      options={selectOptions}
      onChangeFunction={(_name, value) => setSelectValue(value)}
      value={selectValue}
      theme={select('theme', themeOptions, 'plain')}
    />
  );
};

export const MultipleValueSelect = () => {
  const [selectValue, setSelectValue] = useState(null);
  const selectOptions = [
    { value: 'Select an option', label: 'Select an option' },
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' },
  ];
  return (
    <Select
      placeholder="Select multiple options"
      name="multipleValue"
      options={selectOptions}
      onChangeFunction={(_name, value) => setSelectValue(value)}
      value={selectValue}
      theme={select('theme', themeOptions, 'plain')}
      searchable
      isMulti
    />
  );
};

export const WithGroupsAndCustomStylesSelect = () => {
  const [selectValue, setSelectValue] = useState(null);
  const selectOptions = [
    {
      label: 'Group 1!',
      options: [
        { value: 'Option 1', label: 'Option 1', group: 'Group 1' },
        { value: 'Option 2', label: 'Option 2', group: 'Group 1' },
        { value: 'Option 3', label: 'Option 3', group: 'Group 1' },
      ],
      value: '',
    },
    {
      label: 'Group 2!',
      options: [
        { value: 'Option 4', label: 'Option 4', group: 'Group 2' },
        { value: 'Option 5', label: 'Option 5', group: 'Group 2' },
        { value: 'Option 6', label: 'Option 6', group: 'Group 2' },
      ],
      value: '',
    },
    {
      label: 'Group 3!',
      options: [
        { value: 'Option 7', label: 'Option 7', group: 'Group 3' },
        { value: 'Option 8', label: 'Option 8', group: 'Group 3' },
        { value: 'Option 9', label: 'Option 9', group: 'Group 3' },
      ],
      value: '',
    },
  ];
  return (
    <Select
      placeholder="With groups"
      name="groupValue"
      options={selectOptions}
      onChangeFunction={(_name, value) => setSelectValue(value)}
      value={selectValue}
      theme={select('theme', themeOptions, 'plain')}
      isMulti
      withGroups
      backgroundColor="transparent"
      borderColor="transparent"
      color="#DA0DFF"
      styles={{
        control: {
          background: 'transparent',
        },
        input: {
          color: '#DA0DFF',
        },
        singleValue: {
          color: '#DA0DFF',
          position: 'initial',
          overflow: 'inherit',
          top: 'inherit',
          transform: 'inherit',
          maxWidth: 'inherit',
        },
        menu: {
          borderRadius: 0,
          marginTop: 0,
          width: '100%',
          color: '#DA0DFF',
          zIndex: 10000,
        },
        menuList: {
          zIndex: 10000,
          padding: 0,
        },
      }}
    />
  );
};
