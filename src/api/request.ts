import axios from 'axios';
import { WeatherApiModel } from 'MyModels';
import { useState, useEffect } from 'react';

export const useWeatherApi = (
  cityName: string,
  countryCode: string
): WeatherApiModel | any => {
  const [data, setData] = useState(null);

  const weatherAPIKey = '408f95afb6ad51e81124d1dfd96f9fce';

  useEffect(() => {
    const fetchData = async (): Promise<any | undefined> => {
      try {
        const result = await axios({
          method: 'get',
          url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&APPID=${weatherAPIKey}`
        });

        setData(result.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [cityName, countryCode]);

  return [{ data }];
};
