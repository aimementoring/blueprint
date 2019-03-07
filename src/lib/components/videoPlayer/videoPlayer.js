import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import { videoPlayerProps, videoPlayerDefaultProps } from './videoPlayerProps.ignore';
import styles from './videoPlayer.module.scss';

export default class VideoPlayer extends Component {
  static propTypes = {
    ...componentPropTypes,
    ...videoPlayerProps,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    ...videoPlayerDefaultProps,
  };

  render() {
    const { containerClassName, theme, ...playerProps } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>
          <ReactPlayer {...playerProps} />
        </div>
      </div>
    );
  }
}
