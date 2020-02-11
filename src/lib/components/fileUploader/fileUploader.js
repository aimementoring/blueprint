import React, { Component } from "react";
import PropTypes from "prop-types";
import Uppy from "@uppy/core";
import AwsS3 from "@uppy/aws-s3";
import Webcam from "@uppy/webcam";
import { DashboardModal, Dashboard } from "@uppy/react";
import { checkValidations } from "../../utils/validation";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";

import styles from "./fileUploader.module.scss";

class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      validationErrors: "",
    };
    this.uppy = Uppy({
      restrictions: {
        maxNumberOfFiles: props.maxNumberOfFiles,
        allowMultipleUploads: props.allowMultipleUploads,
        autoProceed: props.autoProceed,
        maxFileSize: props.maxFileSize || undefined,
        minNumberOfFiles: props.minNumberOfFiles || undefined,
        allowedFileTypes: props.allowedFileTypes || undefined,
      },
      onBeforeUpload: files => {
        return Object.keys(files).reduce((accum, key) => {
          if (!files[key].meta.isUploaded) {
            accum[key] = files[key];
          }
          return accum;
        }, {});
      },
    });
    this.uppy.use(Webcam);
    this.uppy.use(AwsS3, {
      companionUrl: props.companionUrl,
      // serversHeader I couldn't get them into the server
      serverHeaders: {
        folderName: props.folderInS3Name,
      },
    });
    this.uppy.on("upload-success", (file, data) =>
      this.handleUploadFiles(file, data)
    );
    this.uppy.on("cancel-all", () => this.handleUploadFiles());
    this.uppy.on("file-added", file => {
      if (file.meta.isUploaded) {
        this.uppy.setFileState(file.id, {
          progress: { uploadComplete: true, uploadStarted: false },
        });
      }
    });

    const filesUploadedArray = this.getFilesUploadedAsArray(this.props);
    if (filesUploadedArray.length) {
      filesUploadedArray.forEach(file => {
        this.uppy.addFile({
          name: file,
          type: "",
          data: {},
          meta: {
            isUploaded: true,
          },
          source: "Local", // optional, determines the source of the file, for example, Instagram
          isRemote: true, // optional, set to true if actual file is not in the browser, but on
          // some remote server, for example, when using companion in combination with Instagram
        });
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { validations, filesUploaded, hasErrorAfterSubmit } = this.props;
    if (hasErrorAfterSubmit !== prevProps.hasErrorAfterSubmit) {
      const validationErrors = checkValidations(validations, filesUploaded);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ validationErrors });
    }
  }

  getFilesUploadedAsArray = props => {
    if (props.filesUploaded && props.filesUploaded.length) {
      return props.filesUploaded.split(", ");
    } else {
      return [];
    }
  };

  handleUploadFiles = (file, data) => {
    const {
      name,
      filesUploaded,
      onFilesUpload,
      allowMultipleUploads,
    } = this.props;

    if (!file && !data) {
      onFilesUpload(name, "");
      return;
    }
    let dataToUpdate;
    if (!filesUploaded) {
      dataToUpdate = data.uploadURL;
    } else if (allowMultipleUploads) {
      dataToUpdate = `${filesUploaded}, ${data.uploadURL}`;
    }
    this.setState({ validationErrors: "" });
    onFilesUpload(name, dataToUpdate);
  };

  handleDeleteFile = fileToDelete => e => {
    e.preventDefault();
    const { name, allowMultipleUploads, onFilesUpload } = this.props;
    if (!allowMultipleUploads) {
      onFilesUpload(name, "");
    } else {
      const filesArray = this.getFilesUploadedAsArray(this.props);
      const newFilesArray = filesArray.filter(file => file !== fileToDelete);
      onFilesUpload(name, newFilesArray.join(", "));
    }
    this.uppy.getFiles().forEach(file => {
      if (file.name === fileToDelete || file.uploadURL === fileToDelete) {
        this.uppy.removeFile(file.id);
      }
    });
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { isDashboard, height, webcam, placeholder, theme } = this.props;
    const filesUploadedArray = this.getFilesUploadedAsArray(this.props);
    const { validationErrors } = this.state;

    return (
      <div
        className={`${styles.uppyUploadContainer} ${styles[`theme-${theme}`]}`}
      >
        {isDashboard ? (
          <Dashboard
            note={`When you're done, click the x in the
            top right to return to the form.`}
            uppy={this.uppy}
            plugins={webcam ? ["s3", "Webcam"] : ["s3"]}
            height={height}
          />
        ) : (
          <React.Fragment>
            <button
              className={`${styles.documentItemButton} ${validationErrors &&
                styles.withErrors}`}
              onClick={this.handleOpen}
              type="button"
            >
              {placeholder || "Upload Files"}
            </button>
            <DashboardModal
              uppy={this.uppy}
              plugins={webcam ? ["s3", "Webcam"] : ["s3"]}
              closeModalOnClickOutside
              open={this.state.modalOpen}
              onRequestClose={this.handleClose}
              note={`When you're done, click the x in the
                top right to return to the form.`}
            />
            {validationErrors && (
              <p className={styles.errorMessage}>{validationErrors}</p>
            )}
            {filesUploadedArray.length > 0 && (
              <div>
                <span className={styles.fileLabelList}>Uploaded: </span>
                {filesUploadedArray.map(file => (
                  <span className={styles.fileLabel} key={file}>
                    <a
                      onClick={this.handleDeleteFile(file)}
                      title="remove file"
                      className={styles.fileLink}
                    >
                      {file.split("/").slice(-1)[0]}
                    </a>
                  </span>
                ))}
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

FileUploader.propTypes = {
  ...componentPropTypes,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  folderInS3Name: PropTypes.string.isRequired,
  maxNumberOfFiles: PropTypes.number,
  minNumberOfFiles: PropTypes.number,
  allowMultipleUploads: PropTypes.bool,
  filesUploaded: PropTypes.string,
  onFilesUpload: PropTypes.func.isRequired,
  autoProceed: PropTypes.bool,
  maxFileSize: PropTypes.number,
  allowedFileTypes: PropTypes.array,
  height: PropTypes.number,
  isDashboard: PropTypes.bool,
  webcam: PropTypes.bool,
  validations: PropTypes.array,
  hasErrorAfterSubmit: PropTypes.bool,
  companionUrl: PropTypes.string,
};

FileUploader.defaultProps = {
  ...defaultComponentPropTypes,
  maxNumberOfFiles: 1,
  minNumberOfFiles: 1,
  allowMultipleUploads: false,
  filesUploaded: "",
  maxFileSize: null,
  isDashboard: false,
  webcam: false,
  validations: [],
  companionUrl: "https://uppy-file-uploader.herokuapp.com/",
};

export default FileUploader;
