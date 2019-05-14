import React from 'react';
import renderer from 'react-test-renderer';
import Title from './title.js';

describe('Title', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Title>Gradient default title</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is backwards compatible (text passed as prop)', () => {
    const tree = renderer.create(<Title text="Gradient default title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
