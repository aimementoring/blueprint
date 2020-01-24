import React from "react";
import renderer from "react-test-renderer";
import Modal from "./modal";

describe("Modal", () => {
  it("renders properly", () => {
    const tree = renderer.create(<Modal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
