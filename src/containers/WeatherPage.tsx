import React from 'react';

import '../styles/WeatherPage.css';
import ForecastPage from './ForecastPage';
import TodayPage from './TodayPage';

const WeatherPage = () => {
  return (
    <div className="weatherPageContainer">
      <ForecastPage />
      <TodayPage />
    </div>
  );
};

export default WeatherPage;
