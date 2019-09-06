import React from 'react';
import renderer from 'react-test-renderer';
import Input from './input';

describe('Input', () => {
  it('renders properly', () => {
    const component = (
      <Input placeholder="Name" value="" name="name" type="text" required disabled />
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
