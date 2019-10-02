import React from 'react';
import renderer from 'react-test-renderer';
import CountdownTimer from './countdownTimer.js';

describe('CountdownTimer', () => {
  it('renders properly with no date', () => {
    const tree = renderer.create(<CountdownTimer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with custom date', () => {
    const tree = renderer.create(<CountdownTimer date="2019-10-08T09:00:00" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
