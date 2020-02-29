export const weatherIconDisplay = (weatherIcon: string) => {
  return `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
};

export const kelvinToFahrenheit = (kelvin: number, decimalPlaces: number) => {
  return Math.round((9 / 5) * (kelvin - 273) + 32).toFixed(decimalPlaces);
};

export const kelvinToCelcius = (kelvin: number, decimalPlaces: number) => {
  return Math.round(kelvin - 273).toFixed(decimalPlaces);
};

export const supWithDegreeAndTemp = () => {
  return;
};
