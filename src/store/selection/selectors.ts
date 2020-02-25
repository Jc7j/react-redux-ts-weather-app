import get from 'lodash/get';
import { Selections } from 'MyModels';
import { createSelector } from 'reselect';

import { SelectionState } from './reducer';

export const getRootSelectionsSelector = (state: SelectionState) => {
  return get(state, 'selections');
};
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
