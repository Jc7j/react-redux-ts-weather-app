import { createReducer, StateType } from 'typesafe-actions';

import {
  selectedCity,
  selectedCountry,
  selectedCountryCode,
  selectedState,
  SelectionActionCreators
} from './actions';

type SelectionsState = {
  countryCode: string;
  selectedCountry: {
    countryId: string;
    countryName: string;
  };
  selectedState: {
    stateId: string;
    stateName: string;
  };
  selectedCity: {
    cityId: string;
    cityName: string;
  };
};

const INITIAL_STATE = {
  countryCode: 'US',
  selectedCountry: {
    countryId: '231',
    countryName: 'United States'
  },
  selectedState: {
    stateId: '',
    stateName: ''
  },
  selectedCity: {
    cityId: '',
    cityName: ''
  }
};

export const selectionsReducer = createReducer<
  SelectionsState,
  SelectionActionCreators
>(INITIAL_STATE)
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
