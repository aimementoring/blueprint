import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './errorMessage';

describe('ErrorMessage', () => {
  it('renders properly', () => {
    const tree = renderer.create(<ErrorMessage message="Testing error message" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
