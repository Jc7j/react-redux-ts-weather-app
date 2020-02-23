import { Selections } from "MyModels";
import { createAction, ActionType } from "typesafe-actions";

export const selectCountry = createAction(
  "SELECTED_COUNTRY",
  (selectedCountry: string) => ({ selectedCountry })
)<Selections>();

export type SelectionActionCreators = ActionType<typeof selectCountry>;
