import React from 'react';
import renderer from 'react-test-renderer';
import CountryFlagSelector from './countryFlagSelector';

describe('CountrySelector', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<CountryFlagSelector onChangeFunction={() => {}} name="flag" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
