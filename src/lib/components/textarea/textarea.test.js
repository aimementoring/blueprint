import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from './textarea';

describe('Textarea', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Textarea
          placeholder="Write area"
          name="textarea"
          required
          className="myClass"
          onChangeFunction={() => { }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
