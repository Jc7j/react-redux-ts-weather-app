import get from 'lodash/get';
import { Selections } from 'MyModels';
import { createSelector } from 'reselect';

import { SelectionState } from './reducer';

export const getRootSelectionsSelector = (state: SelectionState) => {
  return get(state, 'selections');
};

export const selectedCountryCodeSelector = createSelector(
  getRootSelectionsSelector,
  (selectionState): Selections['countryCode'] =>
    get(selectionState, 'countryCode')
);
export const selectedCountrySelector = createSelector(
  getRootSelectionsSelector,
  (selectionState): Selections['selectedCountry'] =>
    get(selectionState, 'selectedCountry')
);

export const selectedStateSelector = createSelector(
  getRootSelectionsSelector,
  (selectionState): Selections['selectedState'] =>
    get(selectionState, 'selectedState')
);

export const selectedCitySelector = createSelector(
  getRootSelectionsSelector,
  (selectionState): Selections['selectedCity'] =>
    get(selectionState, 'selectedCity')
);
