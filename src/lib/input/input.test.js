import React from 'react';
import Input from './input';
import renderer from 'react-test-renderer';

describe('Input', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Input
          placeholder="Name"
          value=""
          name="name"
          type="text"
          required={true}
          onChangeFunction={value => {}}
          disabled="disabled"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
