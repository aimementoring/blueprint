import React from 'react';
import renderer from 'react-test-renderer';
import AnimatedCircleText from './animatedCircleText.js';

describe('AnimatedCircleText', () => {
  it('renders properly in reverse mode', () => {
    const tree = renderer
      .create(
        <AnimatedCircleText
          text="Testing my circle"
          size={200}
          duration={8}
          fontSize={20}
          reverse={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly in standard mode', () => {
    const tree = renderer
      .create(
        <AnimatedCircleText
          text="Testing my circle"
          size={200}
          duration={8}
          fontSize={20}
          reverse={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
