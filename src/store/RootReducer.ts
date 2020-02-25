import { combineReducers } from 'redux';

import selectionsReducer from './selection/reducer';

const rootReducer = combineReducers({
  selections: selectionsReducer
});

export default rootReducer;
