import { format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import { weatherIconDisplay, kelvinToCelcius, kelvinToFahrenheit } from 'utils';

import {
  forecastCitySelector,
  forecastListSelector
} from 'store/forecast/selectors';
import {
  selectedCelciusSelector,
  selectedStateSelector
} from 'store/selection/selectors';

import SupTag from './SupTag';

import 'styles/TodaysForecast.css';

const TodaysForecast = () => {
  const selectedCelcius = useSelector(selectedCelciusSelector);
  const city = useSelector(forecastCitySelector);
  const { stateName } = useSelector(selectedStateSelector);
  const forecastList = useSelector(forecastListSelector);

  if (forecastList.length <= 0) return null;

  const { temp, feels_like } = forecastList[0].main;
  const { icon } = forecastList[0].weather[0];

  return (
    <div className="todaysForecastContainer">
      <img alt="Weather Icon" src={weatherIconDisplay(icon)} />
      <h3>Today</h3>
      <p className="subheadingText">{format(new Date(), 'eee e, LLL')}</p>
      <span className="todaysTemp">
        {selectedCelcius
          ? kelvinToCelcius(temp, 0)
          : kelvinToFahrenheit(temp, 0)}
        <SupTag
          oTagSize={1.5}
          oTagTopPos={1}
          tempLetterSize={2}
          tempLetterTopPos={1}
        />
      </span>
      <p className="subheadingText">
        {city.name}, {stateName}
      </p>
      <p>
        Feels Like
        {selectedCelcius
          ? kelvinToCelcius(feels_like, 0)
          : kelvinToFahrenheit(feels_like, 0)}
      </p>
    </div>
  );
};

export default TodaysForecast;
