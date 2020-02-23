// export const INITAL_STATE: WeatherApiModel = {
//   list: {
//     dt: 0,
//     main: {
//       temp: 0,
//       feels_like: 0,
//       temp_min: 0,
//       temp_max: 0,
//       pressure: 0,
//       sea_level: 0,
//       grnd_level: 0,
//       humidity: 0,
//       temp_kf: 0
//     },
//     weather: {
//       id: 0,
//       main: "",
//       description: "",
//       icon: ""
//     },
//     clouds: {
//       all: 0
//     },
//     wind: {
//       speed: 0,
//       deg: 0
//     },
//     sys: {
//       pod: ""
//     },
//     dt_txt: ""
//   },
//   city: {
//     id: 0,
//     name: "",
//     coord: {
//       lat: 0,
//       lon: 0
//     },
//     country: "",
//     population: 0,
//     timezone: 0,
//     sunrise: 0,
//     sunset: 0
//   }
// };
export type WeatherApiModel = Readonly<{
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
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
    dt_txt: string;
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
}>;

export default WeatherApiModel;
