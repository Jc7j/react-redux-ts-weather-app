import get from 'lodash/get';
import { SelectionState } from './reducer';
import { createSelector } from 'reselect';
import { Selections } from 'MyModels';
import { selectedCity } from './actions';

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
