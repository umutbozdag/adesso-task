import mutations from '@/store/mutations';
import state from '@/store/state';
import { MutationTypes } from '@/types/store/Mutations';
import RootState from '@/types/store/State';
import { beforeEach, describe, expect, it } from 'vitest';
import { Store, createStore } from 'vuex';
import { generateArrayOfUnits } from '../mocks/unit.mocks';
import { UnitAgeEnum } from '@/types/Unit';

describe('Vuex Mutations', () => {
  let store: Store<RootState>;
  const mockUnits = generateArrayOfUnits(1);
  beforeEach(() => {
    store = createStore({
      state,
      mutations
    });
  });

  it('SET_SELECTED_OPTION mutation sets selectedOption correctly', () => {
    const option = 'exampleOption';
    store.commit(MutationTypes.SET_SELECTED_OPTION, option);
    expect(store.state.selectedOption).toBe(option);
  });

  it('SET_UNITS mutation sets units correctly', () => {
    const units = mockUnits;
    const key = UnitAgeEnum.All;
    store.commit(MutationTypes.SET_UNITS, { units, key });
    expect(store.state.units[key]).toEqual(units);
  });

  it('SET_FILTERED_UNITS mutation sets filteredUnits correctly', () => {
    const units = mockUnits;
    store.commit(MutationTypes.SET_FILTERED_UNITS, units);
    expect(store.state.filteredUnits).toEqual(units);
  });

  it('SET_UNIT_DETAIL mutation sets unitDetail correctly', () => {
    const unit = { name: 'unitName', value: 42 };
    store.commit(MutationTypes.SET_UNIT_DETAIL, unit);
    expect(store.state.unitDetail).toEqual(unit);
  });

  it('RESET_COST_FILTERS mutation sets costsFilters correctly', () => {
    store.state.costsFilters.food.selected = true;
    store.commit(MutationTypes.RESET_COST_FILTERS);
    expect(store.state.costsFilters.food.selected).toEqual(false);
  });
});
