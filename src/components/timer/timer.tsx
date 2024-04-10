import { formatTime } from '../../helpers/format-time';

interface Props {
  time: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}

export const Timer = ({ time: { days, hours, minutes, seconds } }: Props) => (
  <div>
    {`${formatTime(days)} : ${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`}
  </div>
);
