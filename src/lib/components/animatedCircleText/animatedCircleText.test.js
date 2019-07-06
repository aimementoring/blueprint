import React from 'react';
import renderer from 'react-test-renderer';
import AnimatedCircleText from './animatedCircleText.js';

describe('AnimatedCircleText', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <AnimatedCircleText
          text="Testing my circle"
          size={200}
          duration={8}
          fontSize={20}
          reverse
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
