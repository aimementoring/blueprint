import React from 'react';
import PropTypes from 'prop-types';
import {
  componentPropTypes,
  defaultComponentPropTypes,
} from '../../utils/componentPropTypes';
import Title from '../title';
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
      <div className={containerClassName}>
        <div
          className={styles.circleContainer}
          style={{
            ...containerStyle,
            animationDuration: `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          }}
        >
          <Title type="h3Title">
            {chars.map((char, index) => (
              <span
                style={{
                  transform: `rotate(${qty * (index + 1)}deg)`,
                  height: `${size / 2}px`,
                  fontSize: `${fontSize}px`,
                }}
                className={className}
                key={index}
              >
                {char}
              </span>
            ))}
          </Title>
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
