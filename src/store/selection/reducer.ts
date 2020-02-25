import { createReducer, StateType, action } from "typesafe-actions";
import { selectedCity } from "./actions";

import {
  selectedCountry,
  selectedState,
  SelectionActionCreators
} from "./actions";

type SelectionsState = {
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
  selectedCountry: {
    countryId: "231",
    countryName: "United States"
  },
  selectedState: {
    stateId: "",
    stateName: ""
  },
  selectedCity: {
    cityId: "",
    cityName: ""
  }
};

export const selectionsReducer = createReducer<
  SelectionsState,
  SelectionActionCreators
>(INITIAL_STATE)
  .handleAction(selectedCountry, (state, action) => {
    // const { countryId, countryName } = action;
    console.log(action);

    return {
      ...state,
      selectedCountry: {
        countryId: action.payload,
        countryName: action.meta
      }
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

// const selectionsReducer = combineReducers({
//   selections
// });

export default selectionsReducer;
export type SelectionState = StateType<typeof selectionsReducer>;
