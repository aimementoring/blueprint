import React from "react";
import renderer from "react-test-renderer";
import AimeVideoPlayer from "./AimeVideoPlayer.js";

describe("AimeVideoPlayer", () => {
  it("renders properly", () => {
    const tree = renderer.create(<AimeVideoPlayer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
