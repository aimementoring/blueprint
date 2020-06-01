import React from 'react';
import { select } from '@storybook/addon-knobs';
import Title from './title';
import themeOptions from '../../styles/themeOptions';

const typeOptions = {
  headingLockup: 'headingLockup',
  h1Title: 'h1Title',
  h2Title: 'h2Title',
  h3Title: 'h3Title',
  h4Title: 'h4Title',
  h5Title: 'h5Title',
};

export default {
  title: 'Title',
  parameters: {
    jest: ['title.test.js'],
  },
};

export const headingLockupTitle = () => (
  <Title
    theme={select('theme', themeOptions, 'plain')}
    type={select('type', typeOptions, 'headingLockup')}
  >
    The featured <strong>Heading lockup</strong>
  </Title>
);

export const h1TitleTitle = () => (
  <Title
    theme={select('theme', themeOptions, 'plain')}
    type={select('type', typeOptions, 'h1Title')}
  >
    Heading 1
  </Title>
);

export const h2TitleTitle = () => (
  <Title
    theme={select('theme', themeOptions, 'plain')}
    type={select('type', typeOptions, 'h2Title')}
  >
    Heading 2
  </Title>
);

export const h3TitleTitle = () => (
  <Title
    theme={select('theme', themeOptions, 'plain')}
    type={select('type', typeOptions, 'h3Title')}
  >
    Heading 3
  </Title>
);

export const h4TitleTitle = () => (
  <Title
    theme={select('theme', themeOptions, 'plain')}
    type={select('type', typeOptions, 'h4Title')}
  >
    Heading 4
  </Title>
);

export const h5TitleTitle = () => (
  <Title
    theme={select('theme', themeOptions, 'plain')}
    type={select('type', typeOptions, 'h5Title')}
  >
    Heading 5
  </Title>
);
