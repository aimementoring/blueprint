import React from 'react';
import renderer from 'react-test-renderer';
import StarsFeedback from './starsFeedback';

describe('StarsFeedback', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <StarsFeedback
          starSelected={0}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
