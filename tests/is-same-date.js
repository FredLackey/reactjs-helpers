import { isSameDate } from '../';

describe('isSameDate', () => {
  it('should return true when both inputs are the same date', () => {
    const date1 = new Date('2022-01-01T00:00:00Z');
    const date2 = new Date('2022-01-01T12:00:00Z');
    expect(isSameDate(date1, date2)).toBe(true);
  });

  it('should return false when inputs have different dates', () => {
    const date1 = new Date('2022-01-01T00:00:00Z');
    const date2 = new Date('2022-01-02T00:00:00Z');
    expect(isSameDate(date1, date2)).toBe(false);
  });

  it('should return false when the first input is not a date', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const notADate = '2022-01-01T00:00:00Z';
    expect(isSameDate(notADate, date)).toBe(false);
  });

  it('should return false when the second input is not a date', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const notADate = '2022-01-01T00:00:00Z';
    expect(isSameDate(date, notADate)).toBe(false);
  });

  it('should return false when both inputs are not dates', () => {
    const notADate1 = '2022-01-01T00:00:00Z';
    const notADate2 = '2022-01-02T00:00:00Z';
    expect(isSameDate(notADate1, notADate2)).toBe(false);
  });
});
