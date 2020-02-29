import { Selections } from 'MyModels';
import { createReducer, StateType } from 'typesafe-actions';

import { SELECTED_INITIAL_STATE } from 'models/initialStates';

import {
  celciusSelected,
  selectedCity,
  selectedCountry,
  selectedCountryCode,
  selectedState,
  SelectionActionCreators
} from './actions';

export const selectionsReducer = createReducer<
  Selections,
  SelectionActionCreators
>(SELECTED_INITIAL_STATE)
  .handleAction(celciusSelected, state => {
    return {
      ...state,
      celcius: !state.celcius
    };
  })
  .handleAction(selectedCountry, (state, action) => {
    return {
      ...state,
      selectedCountry: {
        countryId: action.payload,
        countryName: action.meta
      }
    };
  })
  .handleAction(selectedCountryCode, (state, action) => {
    return {
      ...state,
      countryCode: action.payload
    };
  })
  .handleAction(selectedState, (state, action) => {
    return {
      ...state,
      selectedState: {
        stateId: action.payload,
        stateName: action.meta
      }
    };
  })
  .handleAction(selectedCity, (state, action) => {
    return {
      ...state,
      selectedCity: {
        cityId: action.payload,
        cityName: action.meta
      }
    };
  });

export default selectionsReducer;
export type SelectionState = StateType<typeof selectionsReducer>;
