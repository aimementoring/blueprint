import React from "react";
import renderer from "react-test-renderer";
import FileUploader from "./fileUploader.js";

describe("FileUploader", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(
        <FileUploader
          name="wwccFiles"
          folderInS3Name="test/blueprint"
          maxNumberOfFiles={2}
          allowMultipleUploads={true}
          filesUploaded=""
          height={500}
          companionUrl="https://uppy-file-uploader.herokuapp.com/"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    // eslint-disable-next-line no-tabs
  });
});
