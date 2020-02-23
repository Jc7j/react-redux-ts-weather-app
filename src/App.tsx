import React from "react";

import WeatherPage from "./containers/WeatherPage";

import "./App.css";

require("dotenv").config();

const App = () => {
  return (
    <div className="App">
      <WeatherPage />
    </div>
  );
};

export default App;
