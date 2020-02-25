import { WeatherApiModel } from 'MyModels';
import { createReducer, StateType } from 'typesafe-actions';

import { FORECAST_INITAL_STATE } from 'models/WeatherApiModel';

import { addingForecast, ForecastActionCreators } from './actions';

export const forecastReducer = createReducer<
  WeatherApiModel,
  ForecastActionCreators
>(FORECAST_INITAL_STATE).handleAction(addingForecast, (state, action) => {
  console.log(action);
  return {
    ...state,
    forecast: action.payload
  };
});

export default forecastReducer;
export type ForecastState = StateType<typeof forecastReducer>;
