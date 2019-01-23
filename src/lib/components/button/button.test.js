import React from 'react';
import renderer from 'react-test-renderer';
import Button from './button';

describe('Button', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Button type="button" onClickFunction={() => {}} text="Back" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
