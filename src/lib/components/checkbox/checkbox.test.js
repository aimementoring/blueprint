import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './checkbox';

describe('Checkbox', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Checkbox
          elementClassName="classname"
          onChangeFunction={() => {}}
          placeholder="Accept terms and conditions"
          name="checkbox"
          customId="checkbox"
          value={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
