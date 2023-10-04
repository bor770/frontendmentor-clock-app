export type WorldtimeapiResonse = {
  abbreviation: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  timezone: string;
  week_number: number;
};

export type TimeData = {
  abbreviation: string;
  dateTime: Date;
  dayOfWeek: number;
  dayOfYear: number;
  timezone: string;
  weekNumber: number;
};

export type TimeOfDay = `morning` | `afternoon` | `evening`;

export type DayOrNight = `day` | `night`;
