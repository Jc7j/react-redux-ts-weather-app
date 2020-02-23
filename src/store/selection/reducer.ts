import { createReducer, StateType } from "typesafe-actions";

import { selectCountry, SelectionActionCreators } from "./actions";

type SelectionsState = {
  selectedCountry: string;
};

const INITIAL_STATE = {
  selectedCountry: ""
};

export const selectionsReducer = createReducer<
  SelectionsState,
  SelectionActionCreators
>(INITIAL_STATE).handleAction(selectCountry, (state, action) => {
  return {
    ...state,
    selectCountry: action.payload
  };
});

// const selectionsReducer = combineReducers({
//   selections
// });

export default selectionsReducer;
export type SelectionState = StateType<typeof selectionsReducer>;
