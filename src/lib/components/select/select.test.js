import React from 'react';
import renderer from 'react-test-renderer';
import SelectInput from './select';

describe('SelectInput', () => {
  it('renders properly', () => {
    const selectOptions = [
      { value: 'Select an option', label: 'Select an option' },
      { value: 'Option 1', label: 'Option 1' },
      { value: 'Option 2', label: 'Option 2' },
      { value: 'Option 3', label: 'Option 3' },
      { value: 'Option 4', label: 'Option 4' },
      { value: 'Option 5', label: 'Option 5' },
    ];
    const tree = renderer
      .create(
        <SelectInput
          placeholder="Select an option"
          name="select"
          onChangeFunction={value => {}}
          options={selectOptions}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
