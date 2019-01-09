import React from 'react';
import Button from './button';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Button type="button" onClickFunction={() => {}} text="Back" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
