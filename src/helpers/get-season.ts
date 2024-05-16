import { SEASON, YEAR } from '../constants/app-constants';

export const getSeason = (currentMonth: number) => {
  switch (true) {
    case YEAR.WINTER_MONTHS.includes(currentMonth):
      return SEASON.WINTER;

    case YEAR.SPRING_MONTHS.includes(currentMonth):
      return SEASON.SPRING;

    case YEAR.SUMMER_MONTHS.includes(currentMonth):
      return SEASON.SUMMER;

    case YEAR.AUTUMN_MONTHS.includes(currentMonth):
      return SEASON.AUTUMN;

    default:
      return '';
  }
};
