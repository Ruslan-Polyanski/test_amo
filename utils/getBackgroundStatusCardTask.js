function getBackgroundStatusCardTask(timestampTask) {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
  const dayTomorrow = tomorrow.getDate() + 1; 
  const monthTomorrow = tomorrow.getMonth();
  const yearTomorrow = tomorrow.getFullYear(); 

  const timestampToNextDay = new Date(yearTomorrow, monthTomorrow, dayTomorrow).getTime();

  const resultTime = timestampTask - Date.now();

  let colorSVG = null;

  if(resultTime <= 0) {
    colorSVG = 'red';
  } else if (resultTime > 0) {
    timestampTask < timestampToNextDay ? colorSVG = 'green' : colorSVG = 'yellow';
  }

  return colorSVG;
}

export { getBackgroundStatusCardTask }