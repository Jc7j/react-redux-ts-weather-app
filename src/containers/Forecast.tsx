import React from "react";
import { useSelector } from "react-redux";

import Dropdown from "../components/Dropdown";
import {
  selectedCountrySelector,
  selectedStateSelector
} from "../store/selection/selectors";

import "../styles/Forecast.css";

const Forecast = () => {
  const { countryId } = useSelector(selectedCountrySelector);
  const { stateId } = useSelector(selectedStateSelector);
  return (
    <div className="forecastContainer">
      <Dropdown countryId={countryId} stateId={stateId} />
      <h2>
        Weather <strong>Forecast</strong>
      </h2>
    </div>
  );
};

export default Forecast;
