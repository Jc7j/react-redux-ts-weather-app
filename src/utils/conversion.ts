export const kelvinToFahrenheit = (kelvin: number) => {
  return (9 / 5) * (kelvin - 273) + 32;
};

export const kelvinToCelcius = (kelvin: number) => {
  return kelvin - 273;
};
