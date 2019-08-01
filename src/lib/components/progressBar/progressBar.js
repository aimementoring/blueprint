import React from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './progressBar.module.scss';

const ProgressBar = ({
  theme,
  progress,
  displayNumber,
  backgroundColor,
  barColor,
  color,
  height,
  fontSize,
}) => {
  const progressBarStyle = {
    width: `${progress}%`,
    fontSize: `${fontSize}px`,
    lineHeight: `${height}px`,
  };
  const progressStyle = {
    height: `${height}px`,
  };
  if (color) progressBarStyle.color = color;
  if (barColor) progressBarStyle.backgroundColor = barColor;
  if (backgroundColor) progressStyle.backgroundColor = backgroundColor;
  return (
    <div className={styles[`theme-${theme}`]}>
      <div className={styles.progress} style={progressStyle}>
        <div className={styles.progressBar} style={progressBarStyle}>
          {displayNumber && `${progress}%`}
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  ...componentPropTypes,
  progress: PropTypes.number,
  displayNumber: PropTypes.bool,
  backgroundColor: PropTypes.string,
  barColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  fontSize: PropTypes.number,
};

ProgressBar.defaultProps = {
  ...defaultComponentPropTypes,
  progress: 0,
  displayNumber: false,
  backgroundColor: null,
  barColor: null,
  color: null,
  height: 20,
  fontSize: 12,
};

export default ProgressBar;
