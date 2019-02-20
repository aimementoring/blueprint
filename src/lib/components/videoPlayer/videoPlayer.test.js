import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './videoPlayer';

describe('Video', () => {
  it('renders properly', () => {
    const tree = renderer.create(<VideoPlayer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
