import React from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './animatedCircleText.module.scss';

const AnimatedCircleText = ({
  theme,
  text,
  size,
  duration,
  fontSize,
  reverse,
  className,
  containerClassName,
}) => {
  const chars = `${text} `.split('');
  const qty = 360 / chars.length;
  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <div className={styles[`theme-${theme}`]}>
      <div className={`${styles.animatedContainer} ${containerClassName}`}>
        <div
          className={styles.circleContainer}
          style={{
            ...containerStyle,
            animationDuration: `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          {chars.map((char, index) => (
            <span
              style={{
                transform: `rotate(${qty * (index + 1)}deg)`,
                height: `${size / 2}px`,
                fontSize: `${fontSize}px`,
              }}
              className={className}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

AnimatedCircleText.propTypes = {
  ...componentPropTypes,
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  duration: PropTypes.number,
  fontSize: PropTypes.number,
  reverse: PropTypes.bool,
};

AnimatedCircleText.defaultProps = {
  ...defaultComponentPropTypes,
  size: 200,
  duration: 4,
  fontSize: 26,
  reverse: false,
};

export default AnimatedCircleText;
