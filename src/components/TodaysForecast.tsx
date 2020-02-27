import { format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';

import { forecastCitySelector } from 'store/forecast/selectors';
import { selectedStateSelector } from 'store/selection/selectors';

import 'styles/TodaysForecast.css';

const TodaysForecast = () => {
  const city = useSelector(forecastCitySelector);
  const { stateName } = useSelector(selectedStateSelector);

  return (
    <div className="todaysForecastContainer">
      <h1>Today</h1>
      <p className="subheadingText">{format(new Date(), 'eee e, LLL')}</p>
      {city.name && stateName && (
        <p className="subheadingText">
          {city.name}, {stateName}
        </p>
      )}
    </div>
  );
};

export default TodaysForecast;
