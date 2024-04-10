import { useEffect, useState } from 'react';

import { Timer } from '../timer/timer';
import { MONTH } from '../../constants/app-constants';
import './app.scss';

export const App = () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const areWeWaitingForSummer = currentMonth <= MONTH.MAY || currentMonth === MONTH.DECEMBER;

  const calculateDeadline = () => {
    switch (true) {
      case currentMonth <= MONTH.MAY:
        return `${currentYear}-06-01`;

      case currentMonth >= MONTH.JUNE && currentMonth <= MONTH.NOVEMBER:
        return `${currentYear}-12-01`;

      case currentMonth === MONTH.DECEMBER:
        return `${currentYear + 1}-06-01`;

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
    <main>
      <h1>
        {isTimeUp()
          ? `${areWeWaitingForSummer ? 'Summer' : 'Winter'} is here!`
          : `${areWeWaitingForSummer ? 'Summer' : 'Winter'} is coming in`}
      </h1>

      <Timer time={timeLeft} />
    </main>
  );
};
