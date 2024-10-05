
function getConvertDateAndTimestamp(timestampSeconds) {
  const dateFromTimestamp = new Date(timestampSeconds * 1000);

  const day = dateFromTimestamp.getDate();
  const month = dateFromTimestamp.getMonth();
  const year = dateFromTimestamp.getFullYear();

  const newFormatDay = day < 10 ? '0' + day : day;
  const newFormatMonth = month + 1 >= 10 ? month + 1 : '0' + (month + 1); 

  const newFormatDate = `${newFormatDay}.${newFormatMonth}.${year}`;

  return {date: newFormatDate, timestampTask: dateFromTimestamp.getTime()};
}

export { getConvertDateAndTimestamp }