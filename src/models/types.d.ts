declare module 'MyModels' {
  export type Selections = {
    countryCode: string;
    selectedCountry: {
      countryId: string;
      countryName: string;
    };
    selectedState: {
      stateId: string;
      stateName: string;
    };
    selectedCity: {
      cityId: string;
      cityName: string;
    };
  };

  export type WeatherApiModel = {
    cod: string;
    message: number;
    cnt: number;
    list: {
      dt: number;
      main: {
        temp: number;
        feelsLike: number;
        tempMin: number;
        tempMax: number;
        pressure: number;
        seaLevel: number;
        grndLevel: number;
        humidity: number;
        tempKf: number;
      };
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
      };
      sys: {
        pod: string;
      };
      dtTxt: string;
    }[];
    city: {
      id: number;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  };
}
