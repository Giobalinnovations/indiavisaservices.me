export const addDays = (date, days) =>
  new Date(new Date(date).getTime() + days * 24 * 60 * 60 * 1000);
