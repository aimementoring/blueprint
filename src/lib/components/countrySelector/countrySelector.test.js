import React from 'react';
import renderer from 'react-test-renderer';
import CountrySelector from './countrySelector';

describe('CountrySelector', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <CountrySelector
          placeholder="Select a country"
          onChangeFunction={value => {}}
          name="country"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
