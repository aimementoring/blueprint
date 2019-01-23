import React from 'react';
import renderer from 'react-test-renderer';
import Select from './select';

describe('Select', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Select
          placeholder="Select an option"
          name="select"
          onChangeFunction={value => {}}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'].map(value => (
            <option key={`value-${value}`}>{value}</option>
          ))}
        </Select>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
