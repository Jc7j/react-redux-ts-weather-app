import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectedCountrySelector,
  selectedStateSelector
} from 'store/selection/selectors';

import Dropdown from 'components/Dropdown';

import 'styles/Forecast.css';

const Forecast = () => {
  const stateId = useSelector(selectedStateSelector);
  const countryId = useSelector(selectedCountrySelector);

  return (
    <div className="forecastContainer">
      <Dropdown countryId={countryId.countryId} stateId={stateId.stateId} />
      <h2>
        Weather <strong>Forecast</strong>
      </h2>
    </div>
  );
};

export default Forecast;
