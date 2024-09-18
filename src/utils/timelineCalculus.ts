import { Service } from "~/app/models/service";

export const calculateminMaxServiceHours = (
  minMorning_hours: string,
  maxAfternoonHours: string,
): [number, number] => {
  if (
    minMorning_hours &&
    maxAfternoonHours &&
    minMorning_hours.split(":").length === 2 &&
    maxAfternoonHours.split(":").length == 2
  ) {
    const min = Number.parseInt(minMorning_hours ?? "0:".split(":")[0]);
    const max = Number.parseInt(maxAfternoonHours ?? "24:".split(":")[0]);
    return [min, max];
  } else {
    return [0, 24];
  }
};
export const calculateminMaxServiceMinutes = (
  morning_start: string,
  afternoon_end: string,
): [number, number] => {
  const start = morning_start ?? "00:00";
  const end = afternoon_end ?? "24:00";

  const [minHours, minMinutes] = start.split(":");
  const [maxHours, maxMinutes] = end.split(":");

  return [
    Number.parseInt(minHours ?? "00") * 60 +
      Number.parseInt(minMinutes ?? "00"),
    Number.parseInt(maxHours ?? "24") * 60 +
      Number.parseInt(maxMinutes ?? "59"),
  ];
};
export const calculatexAxisSteps = (services: Service[]) => {
  const [min, max] = services.reduce(
    (minMax, service, idx) => {
      if (
        service.opening_hours.morning_start &&
        service.opening_hours.afternoon_end
      ) {
        const [min, max] = calculateminMaxServiceMinutes(
          service.opening_hours.morning_start,
          service.opening_hours.afternoon_end,
        );
        if (idx === 0) {
          minMax[0] = min;
          minMax[1] = max;
          return minMax;
        } else {
          if (minMax[0] && min < minMax[0]) {
            minMax[0] = min;
          }
          if (minMax[1] && max > minMax[1]) {
            minMax[1] = max;
          }
          return minMax;
        }
      }
      return minMax;
    },
    [0, 24],
  );
  const d = (max - min) % 60;
  let ticks = 0;
  if (d === 0) ticks = Math.floor((max - min) / 60);
  else ticks = Math.floor((max - min) / 60) + 1;
  console.log(ticks);
  return [ticks, min, max]; // divide each opening hours hours by 4 to have quarter hours : 8 hours of opening * 4 equals 32 quarter hours
};

export const getHoursAndMinutesFromMinutes = (
  minutes: number,
): [number, number] => {
  return [Math.floor(minutes / 60), minutes % 60];
};

export const convertStrTimeToMinutes = (time: string): number => {
  const [heure, minute] = time.split(":");
  if (heure && minute)
    return Number.parseInt(heure) * 60 + Number.parseInt(minute);
  else return 0;
};

export const timeDurationInMinutes = (start: number, end: number): number => {
  return end - start;
};

export const getTicksfromMinutes = (minutes: number) => {
  return Math.floor(minutes / 60) * 4 + (minutes % 60) / 15;
};

export const getTickIndexFromMinutes = (
  min: number,
  minutes: number,
): number => {
  return (minutes - min) / 15;
};
