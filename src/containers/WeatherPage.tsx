import React from 'react';

import '../styles/WeatherPage.css';
import Forecast from './Forecast';
import TodayPage from './TodayPage';

const WeatherPage = () => {
  return (
    <div className="weatherPageContainer">
      <Forecast />
      <TodayPage />
    </div>
  );
};

export default WeatherPage;
