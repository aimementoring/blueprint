import React from 'react';
import renderer from 'react-test-renderer';
import Button from './button';

describe('Button', () => {
  it('renders button properly', () => {
    const tree = renderer
      .create(<Button type="button" onClickFunction={() => {}} text="Back" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders link properly', () => {
    const tree = renderer
      .create(<Button type="link" text="Link button" url="www.aimementoring.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
