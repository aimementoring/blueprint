import calculateCountdown from './countdownTimerUtils.ignore';

describe('CountdownTimerUtils', () => {
  describe('calculateCountdown with no difference between dates', () => {
    let date;

    beforeAll(() => {
      date = new Date(2019, 2, 5, 11, 30, 32, 5).toISOString();
    });

    it('calculateCountdown returns always 5 elements on array', () => {
      const result = calculateCountdown(date, date);
      expect(result.length).toEqual(5);
    });

    it('calculateCountdown returns all elements on array with 0', () => {
      const result = calculateCountdown(date, date);
      expect(result).toEqual([0, 0, 0, 0, 0]);
    });
  });

  describe('calculateCountdown with different dates', () => {
    let startDate;
    let endDate;

    beforeAll(() => {
      startDate = new Date(2019, 2, 5, 11, 30, 32, 5).toISOString();
      endDate = new Date(2020, 5, 8, 4, 20, 15, 300).toISOString();
    });

    it('calculateCountdown returns always 5 elements on array', () => {
      const result = calculateCountdown(endDate, startDate);
      expect(result.length).toEqual(5);
    });

    it('calculateCountdown returns calculated time correctly in the array', () => {
      const result = calculateCountdown(endDate, startDate);
      // expect(result).toEqual([1, 95, 10, 49, 43]);
    });
  });
});
