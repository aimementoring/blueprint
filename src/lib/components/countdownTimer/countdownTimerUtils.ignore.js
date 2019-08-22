import moment from 'moment-timezone';

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365.25 * DAY;

const calculateCountdown = (endDate, startDate = new Date().toISOString()) => {
  let diff =
    (moment.tz(endDate, 'America/New_York') - moment.tz(startDate, 'America/New_York')) / 1000;

  // clear countdown when date is reached
  if (diff <= 0) {
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
  const seconds = Number(diff.toFixed(0));
  return [years, days, hours, minutes, seconds];
};

export default calculateCountdown;
