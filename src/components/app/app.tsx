import { useEffect, useState } from 'react';
import { getSeason } from '../../helpers/get-season';

import { Timer } from '../timer/timer';
import { MONTH, SEASON } from '../../constants/app-constants';

const MONTH_TO_TEXT = {
  [SEASON.WINTER]: 'Spring is coming',
  [SEASON.SPRING]: 'Summer is coming',
  [SEASON.SUMMER]: 'Autumn is coming',
  [SEASON.AUTUMN]: 'Winter is coming',
};

export const App = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentSeason = getSeason(currentMonth);
  const currentYear = now.getFullYear();

  const calculateDeadline = () => {
    switch (true) {
      case currentMonth === MONTH.DECEMBER:
        return `${currentYear + 1}-03-01`;

      case currentSeason === SEASON.WINTER:
        return `${currentYear}-03-01`;

      case currentSeason === SEASON.SPRING:
        return `${currentYear}-06-01`;

      case currentSeason === SEASON.SUMMER:
        return `${currentYear}-09-01`;

      case currentSeason === SEASON.AUTUMN:
        return `${currentYear}-12-01`;

      default:
        return '';
    }
  };

  const calculateTimeLeft = () => {
    const difference = +new Date(calculateDeadline()) - +now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const isTimeUp = () => {
    const { days, hours, minutes, seconds } = timeLeft;

    return days === 0 && hours === 0 && minutes === 0 && seconds === 0;
  };

  useEffect(() => {
    const timerId = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);

    if (isTimeUp()) {
      clearTimeout(timerId);
    }

    return () => clearTimeout(timerId);
  });

  return (
    <main className="app">
      <div className="app__inner">
        <h1>{MONTH_TO_TEXT[currentSeason]}</h1>

        <Timer time={timeLeft} />
      </div>
    </main>
  );
};
