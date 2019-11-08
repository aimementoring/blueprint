import React from 'react';
import { Title } from './title';
import markdownNotes from './title.md';

export default {
  title: 'Title',
};

export const text = () => <Title>Hello Title</Title>;
text.story = {
  parameters: { notes: markdownNotes },
};
