import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './logo';

describe('Logo', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Logo className="myClass" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
