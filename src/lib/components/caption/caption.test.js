import React from 'react';
import renderer from 'react-test-renderer';
import Caption from './caption';

describe('Caption', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Caption>Default caption</Caption>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('also works when text is passed as a prop', () => {
    const tree = renderer.create(<Caption text="Default Caption" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
