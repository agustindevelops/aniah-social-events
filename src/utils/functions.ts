export const strToUTCDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const timeOffsetInMinutes = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() + timeOffsetInMinutes);

  return date;
};

export const isVideo = (endOfUrl: string) =>
  ['mp4'].some((ext) => endOfUrl.includes(ext));
export const isPhoto = (endOfUrl: string) =>
  ['jpg', 'png'].some((ext) => endOfUrl.includes(ext));
export const getFileExt = (filePath?: string) => {
  if (!filePath) return '';

  const parts = filePath.split('.');
  return parts.at(-1) || '';
};
