import get from 'lodash/get';
import { WeatherApiModel } from 'MyModels';
import { createSelector } from 'reselect';

import { ForecastState } from './reducer';

export const getRootForecastSelector = (state: ForecastState) => {
  return get(state, 'forecast');
};

export const forecastCodSelector = createSelector(
  getRootForecastSelector,
  (forecastState): WeatherApiModel['cod'] => get(forecastState, 'cod')
);

export const forecastCitySelector = createSelector(
  getRootForecastSelector,
  (forecastState): WeatherApiModel['city'] => get(forecastState, 'city')
);

export const forecastListSelector = createSelector(
  getRootForecastSelector,
  (forecastState): WeatherApiModel['list'] => get(forecastState, 'list')
);
