export const weatherIconDisplay = (weatherIcon: string) => {
  return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
};

export const kelvinToFahrenheit = (kelvin: number, decimalPlaces: number) => {
  return Math.round((9 / 5) * (kelvin - 273) + 32).toFixed(decimalPlaces);
};

export const kelvinToCelcius = (kelvin: number, decimalPlaces: number) => {
  return Math.round(kelvin - 273).toFixed(decimalPlaces);
};

export const getTimeOrDay = (dateWithTime: string) => {
  const [date, time] = dateWithTime.split(' ');

  const [hour, min, sec] = time.split(':');

  const [year, month, day] = date.split('-');

  const result = {
    date: date,
    year: year,
    month: month,
    day: day,
    time: time,
    hour: hour,
    min: min,
    sec: sec
  };

  return result;
};

export const getHour = (hour: number) => {
  const amOrPm = hour >= 12 ? 'pm' : 'am';
  const hourTime = hour % 12 || 12;

  return hourTime + amOrPm;
};
