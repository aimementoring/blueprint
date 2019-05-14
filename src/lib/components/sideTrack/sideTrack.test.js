import React from 'react';
import renderer from 'react-test-renderer';
import SideTrack from './sideTrack.js';

describe('SideTrack', () => {
  it('is backwards compatible (paragraph passed as prop)', () => {
    const sideTrackParagraph = (
      <div>
        Testing paragraph with a <a href="#">Link</a> inside
      </div>
    );
    const tree = renderer
      .create(
        <SideTrack title="Side track title" paragraph={sideTrackParagraph} position="right" emojiPosition="left" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly', () => {
    const children = (
      <p>
        <div>
          Testing paragraph with a <a href="#">Link</a> inside
        </div>
      </p>
    );
    const tree = renderer
      .create(
        <SideTrack
          title="Side track title"
          position="right"
          emojiPosition="left"
        >
          {children}
        </SideTrack>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
