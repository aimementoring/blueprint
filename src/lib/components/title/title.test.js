import React from 'react';
import renderer from 'react-test-renderer';
import Title from './title.js';

describe('Title', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Title text="Gradient default title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
