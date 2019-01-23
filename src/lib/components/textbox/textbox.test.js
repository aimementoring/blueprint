import React from 'react';
import renderer from 'react-test-renderer';
import TextBox from './textbox';

describe('TextBox', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <TextBox
          placeholder="Write area"
          name="textbox"
          required
          className="myClass"
          onChangeFunction={value => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
