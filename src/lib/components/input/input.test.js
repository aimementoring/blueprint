import React from 'react';
import renderer from 'react-test-renderer';
import Input from './input';

describe('Input', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Input placeholder="Name" value="" name="name" type="text" required disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
