export const strToUTCDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const timeOffsetInMinutes = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() + timeOffsetInMinutes);

  return date;
};
