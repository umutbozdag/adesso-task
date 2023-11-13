import state from '@/store/state';
import RootState from '@/types/store/State';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { Store, createStore } from 'vuex';
import { generateArrayOfUnits } from '../mocks/unit.mocks';
import { UnitAgeEnum } from '@/types/Unit';
import { GetterTypes } from '@/types/store/Getters';
import getters from '@/store/getters';

describe('Vuex Getters', () => {
  let store: Store<RootState>;
  const mockUnits = generateArrayOfUnits(1);
  let mockState: RootState;

  beforeAll(() => {
    mockState = {
      ...state,
      units: {
        [UnitAgeEnum.All]: mockUnits,
        [UnitAgeEnum.Castle]: null,
        [UnitAgeEnum.Dark]: null,
        [UnitAgeEnum.Feudal]: null,
        [UnitAgeEnum.Imperial]: null
      },
      selectedOption: UnitAgeEnum.All
    };
  });

  beforeEach(() => {
    store = createStore({
      state: mockState,
      getters: getters
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('UNITS getter returns correct units', () => {
    const result = getters[GetterTypes.UNITS](store.state);
    expect(result).toEqual(store.state.units);
  });

  it('SELECTED_OPTION getter returns correct selectedOption', () => {
    const result = getters[GetterTypes.SELECTED_OPTION](store.state);
    expect(result).toEqual(store.state.selectedOption);
  });

  it('CURRENT_UNITS_DATA getter returns correct units based on selectedOption', () => {
    const result = getters[GetterTypes.CURRENT_UNITS_DATA](store.state);
    const expectedUnits = store.state.units[store.state.selectedOption];
    expect(result).toEqual(expectedUnits);
  });
});
