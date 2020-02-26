import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addingForecast } from 'store/forecast/actions';
import { forecastCitySelector } from 'store/forecast/selectors';
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
  const city = useSelector(selectedCitySelector);

  const dispatch = useDispatch();

  const [{ data }] = useWeatherApi(
    city.cityName.replace(' ', '%20'),
    countryCode
  );

  /**
   * @TODO Need a better check so only dispatch once. Maybe add a button...
   */
  if (city.cityName !== '') dispatch(addingForecast(data));

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
