import React from 'react';
import PropTypes from 'prop-types';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
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
  const progressStyle = {
    width: `${Math.min(progress, 100)}%`,
    fontSize: `${fontSize}px`,
    lineHeight: `${height}px`,
  };
  const progressBarStyle = {
    height: `${height}px`,
  };
  if (color) progressStyle.color = color;
  if (barColor) progressStyle.backgroundColor = barColor;
  if (backgroundColor) progressBarStyle.backgroundColor = backgroundColor;
  return (
    <div className={styles[`theme-${theme}`]}>
      <div className={styles.progressBar} style={progressBarStyle}>
        <div className={styles.progress} style={progressStyle}>
          {displayNumber && `${Math.min(progress, 100)}%`}
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
  height: 50,
};

export default ProgressBar;
