import React from 'react';
import PropTypes from 'prop-types';
import styles from './countdownTimer.module.scss';

const addLeadingZeros = value => {
  let newValue = String(value);
  while (newValue.length < 2) {
    newValue = `0${newValue}`;
  }
  return newValue;
};

const timeNames = ['Year', 'Day', 'Hour', 'Min', 'Sec'];

const TimeColumn = ({ time, index }) => (
  <span className={styles.countdownCol}>
    <span className={styles.countdownColElement}>
      <span className={styles.countdownNumber}>{addLeadingZeros(time)}</span>
      <span className={styles.countdownLabel}>{`${timeNames[index]}${time === 1 ? '' : 's'}`}</span>
    </span>
  </span>
);

TimeColumn.propTypes = {
  time: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default TimeColumn;
