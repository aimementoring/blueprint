import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from "../../utils/componentPropTypes";
import Modal from "../modal";

import styles from "./AimeVideoPlayer.module.scss";

// HLS info not sure if we want to add this might help performance? - https://www.dacast.com/blog/hls-streaming-protocol/

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
    videoTitle,
    playsInPicture,
    backgroundVimeo,
    modalWithImage,
    videoDescription,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [urlWithModal, setUrlWithModal] = useState(url);

  const handleModal = () => {
    setShowModal(!showModal);
    setUrlWithModal(url);
  };

  const handleContextMenu = event => {
    event.preventDefault();
  };

  const customPlayIcon = (
    <>
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
    </>
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
    file: {
      /* attributes: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes */
      // tracks: [
      //   { kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true },
      //   { kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja' },
      //   { kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de' },
      // ],
    },
  };

  const lightMode =
    withModal && !showModal ? withModal : !withModal && !showModal;

  const withPlaceHolderimage =
    imageUrl === "" ? lightMode : !showModal && imageUrl;

  const backGroundStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className={styles[`theme-${theme}`]}>
      {!showModal && (
        <div className={styles.playerContainer}>
          <div className={styles.playerBoarder}>
            <div
              className={styles.bgImage}
              style={imageUrl !== "" ? backGroundStyle : null}
            />
            {withModal && customPlayIcon}
            {videoTitle && (
              <span className={styles.videoTitle}>{videoTitle}</span>
            )}
            <ReactPlayer
              playsinline
              volume={0.7}
              width="100%"
              height="100%"
              url={url}
              light={withPlaceHolderimage}
              playing={!withModal}
              pip={playsInPicture}
              playIcon={lightMode && customPlayIcon}
              config={videoPlayersConfig}
              onContextMenu={handleContextMenu}
            />
            {videoDescription && (
              <div className={styles.videoDescription}>{videoDescription}</div>
            )}
          </div>
        </div>
      )}
      <Modal
        showModal={showModal}
        handleModal={handleModal}
        backGroundStyle={
          modalWithImage && imageUrl !== "" ? backGroundStyle : null
        }
        hideBodyOverflowY
      >
        <div className={styles.playerContainer}>
          <div className={styles.playerBoarder}>
            <ReactPlayer
              playsinline
              volume={0.7}
              width="100%"
              height="100%"
              playing={showModal}
              url={urlWithModal}
              config={videoPlayersConfig}
              onContextMenu={handleContextMenu}
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
  videoTitle: PropTypes.string,
  playsInPicture: PropTypes.bool,
  modalWithImage: PropTypes.bool,
  backgroundVimeo: PropTypes.bool,
  url: PropTypes.string.isRequired,
  videoDescription: PropTypes.string,
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
  videoTitle: "",
  controls: false,
  autoPlay: false,
  withModal: false,
  videoDescription: "",
  playsInPicture: false,
  modalWithImage: false,
  backgroundVimeo: false,
  ...defaultComponentPropTypes,
};

export default AimeVideoPlayer;
