import React from 'react';
import renderer from 'react-test-renderer';
import List from './list.js';

describe('List', () => {
  it('renders properly', () => {
    const tree = renderer.create(<List>Gradient default List</List>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is backwards compatible (text passed as prop)', () => {
    const tree = renderer.create(<List text="Gradient default List" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
