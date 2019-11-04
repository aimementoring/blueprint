import React from 'react';
import renderer from 'react-test-renderer';
import PhoneInput from './phoneInput.js';

describe('PhoneInput', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <PhoneInput
          placeholder="Enter phone number"
          value={null}
          country="AU"
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
