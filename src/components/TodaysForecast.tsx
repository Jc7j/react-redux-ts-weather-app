import { format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';

import {
  forecastCitySelector,
  forecastListSelector
} from 'store/forecast/selectors';
import { selectedStateSelector } from 'store/selection/selectors';

import IconDisplay from './IconDisplay';
import SupTag from './SupTag';
import TempConditional from './TempConditional';

import 'styles/TodaysForecast.css';

const TodaysForecast = () => {
  const city = useSelector(forecastCitySelector);
  const { stateName } = useSelector(selectedStateSelector);
  const forecastList = useSelector(forecastListSelector);

  if (forecastList.length <= 0 || forecastList.length === undefined)
    return null;

  const { temp, feels_like } = forecastList[0].main;
  const { icon } = forecastList[0].weather[0];

  return (
    <div className="todaysForecastContainer">
      <IconDisplay top={1.5} icon={icon} left={0.3} />
      <p className="subheadingText">{format(new Date(), 'eee e, LLL')}</p>
      <span className="todaysTemp">
        <TempConditional temperature={temp} toFixed={0} />
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
      {`Feels Like `}
      <TempConditional temperature={feels_like} toFixed={0} />
    </div>
  );
};

export default TodaysForecast;
