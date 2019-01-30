import React from 'react';
import renderer from 'react-test-renderer';
import PhoneInput from './phoneInput';

describe('PhoneInput', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <PhoneInput
          currentSite="global"
          placeholder="Phone"
          name="phone"
          value=""
          onChangeFunction={() => {}}
          onCountrySelected={() => {}}
          required
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
