import { units } from '../common/constants/_vars';

export const wordPad = (num: number, t: string, ta: string, tov: string) => {
  const int = num % 100;

  if (int % 10 === 1 && (int < 10 || int > 20)) {
    return t;
  }
  if (int % 10 >= 2 && int % 10 <= 4 && (int < 10 || int > 20)) {
    return ta;
  }

  return tov;
};

export const getRelativeTime = (elapsed: string) => {
  const rtf = new Intl.RelativeTimeFormat('ru');
  const parsed = Date.parse(elapsed) - Date.now();

  for (const [unit, amount] of units) {
    if (Math.abs(parsed) > amount || unit === 'second') {
      return rtf.format(Math.round(parsed / <number>amount), <any>unit);
    }
  }
};
