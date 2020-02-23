import get from "lodash/get";
import { SelectionState } from "./reducer";
import { createSelector } from "reselect";

export const getRootSelectionsSelector = (state: SelectionState) => {
  return get(state, "selections");
};
export const selectedCountrySelector = createSelector(
  getRootSelectionsSelector,
  selectionState => get(selectionState, "selectedCountry")
);
