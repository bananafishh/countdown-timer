import { formatTime } from '../../helpers/format-time';

import { Timer__Interval } from './timer__interval/timer__interval';
import { Timer__IntervalBox } from './timer__interval-box/timer__interval-box';
import { Timer__IntervalTitle } from './timer__interval-title/timer__interval-title';
import { Timer__IntervalLength } from './timer__interval-length/timer__interval-length';
import './timer.scss';

interface Props {
  time: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const Timer = ({ time }: Props) => (
  <div className="timer">
    {Object.keys(time).map(key => (
      <Timer__Interval key={key}>
        <Timer__IntervalBox>
          <Timer__IntervalLength>
            {formatTime(time[key as keyof typeof time])}
          </Timer__IntervalLength>
        </Timer__IntervalBox>

        <Timer__IntervalTitle>{key}</Timer__IntervalTitle>
      </Timer__Interval>
    ))}
  </div>
);
