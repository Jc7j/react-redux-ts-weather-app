import React from 'react';

import '../styles/WeatherPage.css';
import Forecast from './Forecast';
import Today from './Today';

const WeatherPage = () => {
  return (
    <div className="weatherPageContainer">
      <Forecast />
      <Today />
    </div>
  );
};

export default WeatherPage;
