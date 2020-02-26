import { WeatherApiModel } from 'MyModels';
import { createAction, ActionType } from 'typesafe-actions';

export const addingForecast = createAction('ADDING_FORECAST')<
  WeatherApiModel
>();

export type ForecastActionCreators = ActionType<typeof addingForecast>;
