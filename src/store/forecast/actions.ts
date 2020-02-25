import { createAction, ActionType } from 'typesafe-actions';

export const addingForecast = createAction('ADDING_FORECAST')<object>();

export type ForecastActionCreators = ActionType<typeof addingForecast>;
