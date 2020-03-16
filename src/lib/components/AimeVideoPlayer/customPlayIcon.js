/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";

const CustomPlayIcon = ({ withModal, onClick, stylesPlayButton }) => {
  const iconProps = {
    alt: "play video",
    src:
      "https://aime-website.s3.amazonaws.com/assets/images/play-btn-white.svg",
  };
  if (withModal) {
    iconProps.className = stylesPlayButton;
    iconProps.onClick = onClick;
  }
  return <img {...iconProps} />;
};

CustomPlayIcon.propTypes = {
  withModal: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  stylesPlayButton: PropTypes.object.isRequired,
};

CustomPlayIcon.defaultProps = {
  withModal: false,
};

export default CustomPlayIcon;
