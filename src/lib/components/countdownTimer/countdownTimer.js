import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import calculateCountdown from './countdownTimerUtils.ignore';
import TimeColumn from './timeColumn.ignore';
import styles from './countdownTimer.module.scss';

const CountdownTimer = ({ theme, date }) => {
  const [countDown, setCountDown] = useState([0, 0, 0, 0, 0]);
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      const updatedDate = calculateCountdown(date, new Date().toISOString());
      if (Math.max(...updatedDate) === 0) stop();
      setCountDown(updatedDate);
    }, 1000);
    return () => stop();
  }, []);

  const stop = () => {
    clearInterval(interval);
  };

  return (
    <div className={styles[`theme-${theme}`]}>
      <div className={styles.countDownContainerFeatureBoard}>
        <div className={styles.countdown}>
          {countDown.map((time, index) => (
            <TimeColumn time={time} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
  ...componentPropTypes,
  date: PropTypes.string, // example: date={2018-10-08T09:00:00}
};

CountdownTimer.defaultProps = {
  ...defaultComponentPropTypes,
  date: new Date().toISOString(),
};

export default CountdownTimer;
