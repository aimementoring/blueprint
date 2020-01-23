import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import styles from "./AimeVideoPlayer.module.scss";

export default class AimeVideoPlayer extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    controlsVimeo: PropTypes.bool,
    autoPlayVimeo: PropTypes.bool,
    loopVimeo: PropTypes.bool,
    bylineVimeo: PropTypes.bool,
    titleVimeo: PropTypes.bool,
    muteVimeo: PropTypes.bool,
    backgroundVimeo: PropTypes.bool,
    ...componentPropTypes,
  };

  static defaultProps = {
    controlsVimeo: false,
    autoPlayVimeo: false,
    loopVimeo: false,
    bylineVimeo: false,
    titleVimeo: false,
    muteVimeo: false,
    backgroundVimeo: false,
    ...defaultComponentPropTypes,
  };

  render() {
    const {
      theme,
      url,
      controlsVimeo,
      autoPlayVimeo,
      loopVimeo,
      bylineVimeo,
      titleVimeo,
      muteVimeo,
      backgroundVimeo,
    } = this.props;

    // eslint-disable-next-line no-console
    console.log(
      "TCL: AimeVideoPlayer -> render -> controlsVimeo",
      controlsVimeo
    );
    const customPlayIcon = (
      <div>
        <img
          src="https://aime-website.s3.amazonaws.com/assets/images/play-btn-white.svg"
          alt="play video"
        />
      </div>
    );
    const videoPlayersConfig = {
      vimeo: {
        playerOptions: {
          controls: controlsVimeo,
          autoplay: autoPlayVimeo,
          loop: loopVimeo,
          byline: bylineVimeo,
          title: titleVimeo,
          mute: muteVimeo,
          background: backgroundVimeo,
        },
      },
    };
    // TODO: light="some url for placeholderimage"
    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={styles.playerContainer}>
          <div className={styles.playerBoarder}>
            <ReactPlayer
              url={`${url}?background=1`}
              className="react-player"
              loop
              light
              width="100%"
              height="100%"
              playing
              controls={false}
              playIcon={customPlayIcon}
              playsinline
              config={videoPlayersConfig}
            />
          </div>
        </div>
      </div>
    );
  }
}
