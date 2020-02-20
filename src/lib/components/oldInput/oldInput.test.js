import React from 'react';
import renderer from 'react-test-renderer';
import OldInput from './oldInput';

describe('oldInput', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<OldInput placeholder="Name" value="" name="name" type="text" required disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
