import React from "react";
import renderer from "react-test-renderer";
import AimeVideoPlayer from "./aimeVideoPlayer.js";

describe("AimeVideoPlayer", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<AimeVideoPlayer url="https://vimeo.com/169599296" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
