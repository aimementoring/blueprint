import React from 'react';
import renderer from 'react-test-renderer';
import SideTrack from './sideTrack.js';

describe('SideTrack', () => {
  it('renders properly', () => {
    const sideTrackParagraph = (
      <div>
        Testing paragraph with a <a href="#">Link</a> inside
      </div>
    );
    const tree = renderer
      .create(
        <SideTrack title="Side track title" paragraph={sideTrackParagraph} position="right" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
