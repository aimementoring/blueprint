import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './videoPlayer';

describe('Video', () => {
  it('renders properly', () => {
    const tree = renderer.create(<VideoPlayer url="https://vimeo.com/306075641" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
