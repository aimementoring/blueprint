import React from 'react';
import renderer from 'react-test-renderer';
import List from './list.js';

describe('List', () => {
  it('renders properly', () => {
    const tree = renderer.create(<List>Gradient default List</List>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is backwards compatible (text passed as prop)', () => {
    const tree = renderer
      .create(<List text="Gradient default List" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('works with children (even without a WWCC!)', () => {
    const tree = renderer
      .create(
        <List>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </List>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
