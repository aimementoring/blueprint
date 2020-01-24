// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import Modal from "../modal";

import styles from "./AimeVideoPlayer.module.scss";

const AimeVideoPlayer = props => {
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
    withModal,
    playsInPictureVimeo,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [urlWithModal, setUrlWithModal] = useState(url);

  const handleModal = () => {
    setShowModal(!showModal);
    setUrlWithModal(url);
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const customPlayIcon = (
    <span>
      {withModal ? (
        <img
          className={styles.playButton}
          src="https://aime-website.s3.amazonaws.com/assets/images/play-btn-white.svg"
          alt="play video"
          onClick={handleModal}
        />
      ) : (
        <img
          src="https://aime-website.s3.amazonaws.com/assets/images/play-btn-white.svg"
          alt="play video"
        />
      )}
    </span>
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
          {withModal && customPlayIcon}
          <ReactPlayer
            url={`${url}`}
            className={styles.reactPlayer}
            loop
            light={!withModal}
            playing={!withModal}
            playsinline
            width="100%"
            height="100%"
            controls={false}
            playIcon={!withModal && customPlayIcon}
            pip={playsInPictureVimeo}
            onContextMenu={e => e.preventDefault()}
          />
        </div>
      </div>
      {showModal && (
        <Modal handleModal={handleModal}>
          <div className={styles.playerContainer}>
            <div className={styles.playerBoarder}>
              <ReactPlayer
                url={`${urlWithModal}`}
                className="react-player"
                loop
                width="100%"
                height="100%"
                playing={showModal}
                controls={false}
                playsinline
                config={videoPlayersConfig}
                onContextMenu={e => e.preventDefault()}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

AimeVideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  controlsVimeo: PropTypes.bool,
  autoPlayVimeo: PropTypes.bool,
  loopVimeo: PropTypes.bool,
  bylineVimeo: PropTypes.bool,
  titleVimeo: PropTypes.bool,
  muteVimeo: PropTypes.bool,
  backgroundVimeo: PropTypes.bool,
  withModal: PropTypes.bool,
  playsInPictureVimeo: PropTypes.bool,
  ...componentPropTypes,
};

AimeVideoPlayer.defaultProps = {
  controlsVimeo: false,
  autoPlayVimeo: false,
  loopVimeo: false,
  bylineVimeo: false,
  titleVimeo: false,
  muteVimeo: false,
  backgroundVimeo: false,
  withModal: false,
  playsInPictureVimeo: false,
  ...defaultComponentPropTypes,
};

export default AimeVideoPlayer;
