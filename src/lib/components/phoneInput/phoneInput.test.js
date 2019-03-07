import React from 'react';
import renderer from 'react-test-renderer';
import PhoneInput from './phoneInput.js';

describe('PhoneInput', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<PhoneInput currentSite="au" placeholder="Phone" name="phone" value="" required />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
