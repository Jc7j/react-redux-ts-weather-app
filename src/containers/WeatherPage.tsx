import React from "react";
import { useSelector } from "react-redux";
import { useWeatherApi } from "../api/request";
import Dropdown from "../components/Dropdown";
import {
  selectedCountrySelector,
  selectedStateSelector
} from "../store/selection/selectors";
import "../styles/WeatherPage.css";

const WeatherPage = () => {
  const { countryId } = useSelector(selectedCountrySelector);
  const { stateId } = useSelector(selectedStateSelector);
  const [{ data }] = useWeatherApi("Las%20Vegas", "US");

  return (
    <div>
      <h1>Weather App</h1>
      <Dropdown countryId={countryId} stateId={stateId} />
      {data && data.city.country}
    </div>
  );
};

export default WeatherPage;
