import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import TimeColumn from './timeColumn.ignore';
import styles from './countdownTimer.module.scss';

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365.25 * DAY;

const CountdownTimer = ({ theme, date }) => {
  const [countDown, setCountDown] = useState([0, 0, 0, 0, 0]);
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      const updatedDate = calculateCountdown(date);
      setCountDown(updatedDate);
    }, 1000);
    return () => stop();
  }, []);

  const calculateCountdown = endDate => {
    // let diff = (Date.parse(new Date(endDate)) - Date.parse( new Date() ) ) / 1000;
    let diff = (moment.tz(endDate, 'America/New_York') - moment().tz('America/New_York')) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) {
      stop();
      return [0, 0, 0, 0, 0];
    }
    const years = Math.floor(diff / YEAR);
    diff %= YEAR;
    const days = Math.floor(diff / DAY);
    diff %= DAY;
    const hours = Math.floor(diff / HOUR);
    diff %= HOUR;
    const minutes = Math.floor(diff / MINUTE);
    diff %= MINUTE;
    const seconds = diff.toFixed(0);
    return [years, days, hours, minutes, seconds];
  };

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
  date: new Date(),
};

export default CountdownTimer;
