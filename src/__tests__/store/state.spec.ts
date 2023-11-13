import state from '@/store/state';
import RootState from '@/types/store/State';
import { beforeEach, describe, expect, it } from 'vitest';
import { Store, createStore } from 'vuex';

describe('Vuex State', () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = createStore({
      state: state
    });
  });

  it('initial selectedOption is set correctly', () => {
    expect(store.state.selectedOption).toEqual(state.selectedOption);
  });

  it('initial units are set correctly', () => {
    expect(store.state.units).toEqual(state.units);
  });

  it('initial filteredUnits is set correctly', () => {
    expect(store.state.filteredUnits).toEqual(state.filteredUnits);
  });

  it('initial unitDetail is set correctly', () => {
    expect(store.state.unitDetail).toEqual(state.unitDetail);
  });

  it('initial costsFilters is set correctly', () => {
    expect(store.state.costsFilters).toEqual(state.costsFilters);
  });
});
