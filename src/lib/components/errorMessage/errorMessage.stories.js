import React from 'react';
import ErrorMessage from './errorMessage';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  parameters: {
    jest: ['errorMessage.test.js'],
  },
};

export const errorMessage = () => <ErrorMessage message="Required field" />;

export const emptyErrorMessage = () => <ErrorMessage />;
