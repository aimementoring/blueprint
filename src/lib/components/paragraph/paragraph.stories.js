import React from 'react';
import { select } from '@storybook/addon-knobs';
import Paragraph from './paragraph';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'Paragraph',
  parameters: {
    jest: ['paragraph.test.js'],
  },
};

export const childrenParagraph = () => (
  <Paragraph theme={select('theme', themeOptions, 'plain')}>
    We do not want to inherit a world that is in pain. We do not want to stare down huge inequality
    feeling powerless to our fate. We do not want to be unarmed as we stare down some of the biggest
    problems faced by the human race, from rising sea levels, which will lead to huge refugee
    challenges, to droughts and food shortages, and our own challenges around a cycle of{' '}
    <mark>perpetuated disadvantaged</mark>.
  </Paragraph>
);

export const attributeParagraph = () => (
  <Paragraph
    theme={select('theme', themeOptions, 'plain')}
    text="We want the Imagination agenda in every school in the nation, from early childhood learning centres through to our most prominent universities."
  />
);
