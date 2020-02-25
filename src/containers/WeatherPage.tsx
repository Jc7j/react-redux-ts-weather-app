import React from "react";
import { useWeatherApi } from "../api/request";

import "../styles/WeatherPage.css";
import Today from "./Today";
import Forecast from "./Forecast";

const WeatherPage = () => {
  const [{ data }] = useWeatherApi("Las%20Vegas", "US");

  return (
    <div className="weatherPageContainer">
      <Forecast />
      <Today />
    </div>
  );
};

export default WeatherPage;
