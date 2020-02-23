import React from "react";

import { useWeatherApi } from "../api/request";

import WeatherApiModel from "../models/WeatherApiModel";

import "../styles/WeatherPage.css";

const WeatherPage = () => {
  const [{ data }] = useWeatherApi("Las%20Vegas", "US");

  return (
    <div>
      <h1>Weather App</h1>
      {data && data.city.country}
    </div>
  );
};

export default WeatherPage;
