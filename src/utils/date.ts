export const convertUtcToDateFormatStr = (d: Date): string => {
  const date = new Date(d).toLocaleDateString();
  // const day = date.getDate();
  // const month = date.;
  // const year = d.getFullYear();
  const dates = date.split("/");
  console.log(`${dates[0]}-${dates[1]}-${dates[2]}`);
  return `${dates[2]}-${dates[1]}-${dates[0]}`;
};
export const isDateisInRange = (
  dateToCheck: string,
  startDate: string,
  endDate: string,
) => {
  
};
