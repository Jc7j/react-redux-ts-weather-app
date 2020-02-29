import { WeatherApiModel, Selections } from 'MyModels';
export const FORECAST_INITAL_STATE: WeatherApiModel = {
  cod: '',
  message: 0,
  cnt: 0,
  list: [],
  city: {
    id: 0,
    name: '',
    coord: {
      lat: 0,
      lon: 0
    },
    country: '',
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0
  }
};

export const SELECTED_INITIAL_STATE: Selections = {
  celcius: true,
  countryCode: 'US',
  selectedCountry: {
    countryId: '231',
    countryName: 'United States'
  },
  selectedState: {
    stateId: '',
    stateName: ''
  },
  selectedCity: {
    cityId: '',
    cityName: ''
  }
};
