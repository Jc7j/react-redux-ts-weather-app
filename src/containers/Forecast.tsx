import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectedCountryCodeSelector,
  selectedCountrySelector,
  selectedStateSelector,
  selectedCitySelector
} from 'store/selection/selectors';

import { useWeatherApi } from 'api/request';

import Dropdown from 'components/Dropdown';

import 'styles/Forecast.css';

const Forecast = () => {
  const stateId = useSelector(selectedStateSelector);
  const countryCode = useSelector(selectedCountryCodeSelector);
  const countryId = useSelector(selectedCountrySelector);
  const cityName = useSelector(selectedCitySelector);

  const [{ data }] = useWeatherApi(
    cityName.cityName.replace(' ', '%20'),
    countryCode
  );

  return (
    <div className="forecastContainer">
      <Dropdown countryId={countryId.countryId} stateId={stateId.stateId} />
      <h2>
        Weather <strong>Forecast</strong>
        {data && data.city.population}
      </h2>
    </div>
  );
};

export default Forecast;
