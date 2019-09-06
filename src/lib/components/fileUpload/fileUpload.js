import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import Webcam from '@uppy/webcam';
import { DashboardModal, Dashboard } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import styles from './fileUpload.module.scss';

class FileUpload extends Component {
  static propTypes = {
    folderInS3Name: PropTypes.string.isRequired,
    maxNumberOfFiles: PropTypes.number,
    minNumberOfFiles: PropTypes.number,
    allowMultipleUploads: PropTypes.bool,
    filesUploaded: PropTypes.array,
    onFilesUpload: PropTypes.func,
    autoProceed: PropTypes.bool,
    maxFileSize: PropTypes.number,
    allowedFileTypes: PropTypes.array,
    height: PropTypes.number,
    isDashboard: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.uppy = Uppy({
      debug: true,
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
      companionUrl: 'http://localhost:5002',
      // serversHeader I couldn't get them into the server
      serverHeaders: {
        folderName: props.folderInS3Name,
      },
    });
    this.uppy.on('upload-success', (file, data) => {
      this.props.onFilesUpload(file, data);
    });
    this.uppy.on('cancel-all', () => {
      this.props.onFilesUpload();
    });
    this.uppy.on('file-added', file => {
      if (file.meta.isUploaded) {
        this.uppy.setFileState(file.id, {
          progress: { uploadComplete: true, uploadStarted: false },
        });
      }
    });
    if (props.filesUploaded.length) {
      props.filesUploaded.forEach(file => {
        this.uppy.addFile({
          name: file,
          type: '',
          data: {},
          meta: {
            isUploaded: true,
          },
          source: 'Local', // optional, determines the source of the file, for example, Instagram
          isRemote: true, // optional, set to true if actual file is not in the browser, but on
          // some remote server, for example, when using companion in combination with Instagram
        });
      });
    }
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { isDashboard, height, filesUploaded } = this.props;
    return (
      <div className={styles.uppyUploadContainer}>
        {isDashboard ? (
          <Dashboard uppy={this.uppy} plugins={['s3', 'Webcam']} height={height} />
        ) : (
          <React.Fragment>
            <button className={styles.documentItemButton} onClick={this.handleOpen}>
              Upload Files
            </button>
            <DashboardModal
              uppy={this.uppy}
              plugins={['s3', 'Webcam']}
              closeModalOnClickOutside
              open={this.state.modalOpen}
              onRequestClose={this.handleClose}
            />
            {filesUploaded.length > 0 &&
              filesUploaded.map(file => (
                <span className={styles.fileLabel} key={file}>
                  <br />
                  <span role="img" aria-label="muscle" className={styles.emojiInline}>
                    💪🏾
                  </span>{' '}
                  <strong>Uploaded: </strong>
                  <a href={file} target="_blank" className={styles.fileLink}>
                    {file}
                  </a>
                </span>
              ))}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default FileUpload;
