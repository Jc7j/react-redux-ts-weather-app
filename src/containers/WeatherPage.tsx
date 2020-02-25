import React from 'react';
// import { useWeatherApi } from '../api/request';

import '../styles/WeatherPage.css';
import Forecast from './Forecast';
import Today from './Today';

const WeatherPage = () => {
  // const [{ data }] = useWeatherApi('Las%20Vegas', 'US');

  return (
    <div className="weatherPageContainer">
      <Forecast />
      <Today />
    </div>
  );
};

export default WeatherPage;
