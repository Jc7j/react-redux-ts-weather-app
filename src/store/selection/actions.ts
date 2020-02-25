import { createAction, ActionType } from "typesafe-actions";

export const selectedCountry = createAction("SELECTED_COUNTRY")<
  string,
  string
>();

export const selectedState = createAction("SELECTED_STATE")<string, string>();

export const selectedCity = createAction("SELECTED_CITY")<string, string>();

export type SelectionActionCreators =
  | ActionType<typeof selectedCountry>
  | ActionType<typeof selectedState>
  | ActionType<typeof selectedCity>;
