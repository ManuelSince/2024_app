export type Service = {
  id: string;
  marketing_name: string;
  opening_hours: {
    morning_start: string;
    morning_end: string;
    afternoon_start: string;
    afternoon_end: string;
  };
};
