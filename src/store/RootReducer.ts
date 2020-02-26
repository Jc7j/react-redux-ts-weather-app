import { combineReducers } from 'redux';

import forecastReducer from './forecast/reducer';
import selectionsReducer from './selection/reducer';

const rootReducer = combineReducers({
  selections: selectionsReducer,
  forecast: forecastReducer
});

export default rootReducer;
