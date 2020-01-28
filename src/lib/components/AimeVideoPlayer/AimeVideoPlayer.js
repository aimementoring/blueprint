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
    url,
    mute,
    loop,
    title,
    theme,
    byLine,
    listType,
    imageUrl,
    controls,
    autoPlay,
    withModal,
    playListID,
    playsInPicture,
    backgroundVimeo,
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
        loop,
        mute,
        title,
        controls,
        byline: byLine,
        frameborder: false,
        autoplay: autoPlay,
        background: backgroundVimeo,
      },
      preload: true,
    },
    youtube: {
      playerVars: {
        loop,
        rel: 0,
        controls,
        preload: true,
        color: "white",
        autoplay: autoPlay,
        frameborder: false,
        modestbranding: true,
        listType,
        list:
          playListID && playListID.indexOf("PL") > -1
            ? playListID
            : `PL${playListID}`,
      },
    },
  };
  // User ID: DL9R_msvYDyHF7lx0NEyow
  // Channel ID: UCDL9R_msvYDyHF7lx0NEyow
  const lightMode =
    withModal && !showModal ? withModal : !withModal && !showModal;
  const withPlaceHolderimage =
    imageUrl === "" ? lightMode : !showModal && imageUrl;

  return (
    <div className={styles[`theme-${theme}`]}>
      <div className={styles.playerContainer}>
        <div className={styles.playerBoarder}>
          {withModal && customPlayIcon}
          <ReactPlayer
            playsinline
            volume="0.7"
            width="100%"
            height="100%"
            url={`${url}`}
            light={withPlaceHolderimage}
            playing={!withModal}
            pip={playsInPicture}
            playIcon={lightMode && customPlayIcon}
            config={videoPlayersConfig}
            className={styles.reactPlayer}
            onContextMenu={e => e.preventDefault()}
          />
        </div>
      </div>
      <Modal showModal={showModal} handleModal={handleModal}>
        <div className={styles.playerContainer}>
          <div className={styles.playerBoarder}>
            <ReactPlayer
              playsinline
              volume="0.7"
              width="100%"
              height="100%"
              playing={showModal}
              url={`${urlWithModal}`}
              config={videoPlayersConfig}
              className={styles.reactPlayer}
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

AimeVideoPlayer.propTypes = {
  loop: PropTypes.bool,
  mute: PropTypes.bool,
  title: PropTypes.bool,
  byLine: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  withModal: PropTypes.bool,
  listType: PropTypes.string,
  imageUrl: PropTypes.string,
  playListID: PropTypes.string,
  playsInPicture: PropTypes.bool,
  backgroundVimeo: PropTypes.bool,
  url: PropTypes.string.isRequired,
  ...componentPropTypes,
};

AimeVideoPlayer.defaultProps = {
  loop: false,
  mute: false,
  title: false,
  imageUrl: "",
  listType: "",
  byLine: false,
  playListID: "",
  controls: false,
  autoPlay: false,
  withModal: false,
  playsInPicture: false,
  backgroundVimeo: false,
  ...defaultComponentPropTypes,
};

export default AimeVideoPlayer;
