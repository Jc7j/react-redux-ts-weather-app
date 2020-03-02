import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectedCountrySelector,
  selectedStateSelector
} from 'store/selection/selectors';

import Dropdown from 'components/Dropdown';
import HourlyWeather from 'components/HourlyWeather';
import TempButton from 'components/TempButton';

import 'styles/ForecastPage.css';

const Forecast = () => {
  const stateId = useSelector(selectedStateSelector);
  const countryId = useSelector(selectedCountrySelector);

  return (
    <div className="forecastContainer">
      <Dropdown countryId={countryId.countryId} stateId={stateId.stateId} />
      <h2 className="forecastHeading">
        Weather <strong>Forecast</strong> <TempButton />
      </h2>
      <HourlyWeather />
    </div>
  );
};

export default Forecast;
