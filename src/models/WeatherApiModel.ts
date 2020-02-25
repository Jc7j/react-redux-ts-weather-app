export const FORECAST_INITAL_STATE = {
  forecast: {
    list: [
      {
        dt: 0,
        main: {
          temp: 0,
          feelsLike: 0,
          tempMin: 0,
          tempMax: 0,
          pressure: 0,
          seaLevel: 0,
          grndLevel: 0,
          humidity: 0,
          tempKf: 0
        },
        weather: [
          {
            id: 0,
            main: '',
            description: '',
            icon: ''
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 0,
          deg: 0
        },
        sys: {
          pod: ''
        },
        dtTxt: ''
      }
    ],
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
  }
};
