import { format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import { weatherIconDisplay } from 'utils/weatherIcon';

import {
  forecastCitySelector,
  forecastListSelector
} from 'store/forecast/selectors';
import { selectedStateSelector } from 'store/selection/selectors';

import 'styles/TodaysForecast.css';

const TodaysForecast = () => {
  const city = useSelector(forecastCitySelector);
  const { stateName } = useSelector(selectedStateSelector);
  const forecastList = useSelector(forecastListSelector);

  if (forecastList.length <= 0) return null;

  const { temp, feels_like } = forecastList[0].main;
  const { icon } = forecastList[0].weather[0];

  return (
    <div className="todaysForecastContainer">
      {icon && <img src={weatherIconDisplay(icon)} />} <h1>Today</h1>
      <p className="subheadingText">{format(new Date(), 'eee e, LLL')}</p>
      {temp && feels_like && (
        <p>
          {temp} and {feels_like}
        </p>
      )}
      {city.name && stateName && (
        <p className="subheadingText">
          {city.name}, {stateName}
        </p>
      )}
    </div>
  );
};

export default TodaysForecast;
