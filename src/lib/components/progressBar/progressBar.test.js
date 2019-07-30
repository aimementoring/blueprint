import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './progressBar.js';

describe('ProgressBar', () => {
  it('renders properly with no props', () => {
    const tree = renderer.create(<ProgressBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with just progress value', () => {
    const tree = renderer.create(<ProgressBar progress={10} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with just progress value and display number on true', () => {
    const tree = renderer.create(<ProgressBar progress={40} displayNumber />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly using all available props', () => {
    const tree = renderer
      .create(
        <ProgressBar
          progress={45}
          displayNumber
          backgroundColor="green"
          barColor="red"
          color="yellow"
          height={40}
          fontSize={30}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
