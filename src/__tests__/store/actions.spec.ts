import { createStore, Store } from 'vuex';
import { ActionTypes } from '@/types/store/Actions';
import { MutationTypes } from '@/types/store/Mutations';
import RootState from '@/types/store/State';
import state from '@/store/state';
import { UnitAgeEnum } from '@/types/Unit';
import actions from '@/store/actions';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { generateArrayOfUnits } from '../mocks/unit.mocks';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import { GetterTypes } from '@/types/store/Getters';

const mockedUnits = generateArrayOfUnits(1);

global.fetch = vi.fn().mockResolvedValue({
  json: vi.fn().mockResolvedValue({
    units: mockedUnits
  })
});

describe('Vuex Actions', () => {
  let store: Store<RootState>;
  const commit = vi.fn();
  const dispatch = vi.fn();
  const dispatchOptions = {
    state,
    commit,
    dispatch,
    getters,
    rootState: state,
    rootGetters: getters
  };
  beforeAll(async () => {
    store = createStore({
      state,
      mutations,
      actions,
      getters
    });
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('FETCH_UNITS action fetches and commits units correctly', async () => {
    await actions[ActionTypes.FETCH_UNITS](dispatchOptions);

    expect(commit).toHaveBeenCalledWith(MutationTypes.SET_UNITS, {
      units: expect.any(Array),
      key: UnitAgeEnum.All
    });
    expect(state.units).toEqual({
      All: null,
      Castle: null,
      Dark: null,
      Feudal: null,
      Imperial: null
    });
  });

  it('SET_SELECTED_OPTION should dispatch FILTER_BY_AGE and commit SET_SELECTED_OPTION', () => {
    actions[ActionTypes.SET_SELECTED_OPTION](dispatchOptions, UnitAgeEnum.All);
    expect(dispatch).toHaveBeenCalledWith(ActionTypes.FILTER_BY_AGE, UnitAgeEnum.All);
  });

  describe('FILTER_BY_AGE action', () => {
    it('should not commit mutation if age is UnitAgeEnum.All', () => {
      createStore({
        state: {
          ...state,
          units: {
            All: mockedUnits,
            Castle: null,
            Dark: null,
            Feudal: null,
            Imperial: null
          }
        },
        actions,
        mutations
      });

      actions[ActionTypes.FILTER_BY_AGE](dispatchOptions, UnitAgeEnum.All);

      expect(commit).not.toHaveBeenCalled();
    });

    it('should not commit mutation if units for the specified age already exist', () => {
      const mockState = {
        ...state,
        units: {
          All: mockedUnits,
          Castle: mockedUnits.filter((unit) => unit.age === 'Castle'),
          Dark: null,
          Feudal: null,
          Imperial: null
        }
      };
      createStore({
        state: mockState,
        actions,
        mutations
      });

      actions[ActionTypes.FILTER_BY_AGE](
        {
          state: mockState,
          dispatch,
          commit,
          getters,
          rootGetters: getters,
          rootState: mockState
        },
        UnitAgeEnum.Castle
      );

      expect(commit).not.toHaveBeenCalled();
    });

    it('should commit mutation with filtered units for a specific age', () => {
      const mockState = {
        ...state,
        units: {
          All: mockedUnits,
          Castle: null,
          Dark: null,
          Feudal: null,
          Imperial: null
        }
      };
      createStore({
        state: mockState,
        actions,
        mutations
      });

      actions[ActionTypes.FILTER_BY_AGE](
        {
          state: mockState,
          dispatch,
          commit,
          getters,
          rootGetters: getters,
          rootState: mockState
        },
        UnitAgeEnum.Castle
      );

      expect(commit).toHaveBeenCalled();
    });
  });

  it('FILTER_BY_COST action should set filtered units in the state', () => {
    const filterByCostState = {
      ...state,
      units: {
        All: mockedUnits,
        Castle: null,
        Dark: mockedUnits,
        Feudal: null,
        Imperial: null
      },
      selectedOption: UnitAgeEnum.Dark
    };

    // const getters = {
    //   [GetterTypes.CURRENT_UNITS_DATA]: () => mockedUnits
    // };
    createStore({
      state: filterByCostState,
      actions,
      mutations,
      getters
    });

    actions[ActionTypes.FILTER_BY_COST](
      {
        state: filterByCostState,
        commit,
        dispatch,
        getters,
        rootGetters: getters,
        rootState: filterByCostState
      },
      state.costsFilters
    );

    expect(dispatch).toHaveBeenCalledOnce();
  });

  it('FETCH_UNIT_BY_ID action should set unit detail correctly', () => {
    const fetchUnitByIdState = {
      ...state,
      units: {
        All: mockedUnits,
        Castle: null,
        Dark: null,
        Feudal: null,
        Imperial: null
      },
      selectedOption: UnitAgeEnum.All
    };

    const unitId = 1;

    createStore({
      state: fetchUnitByIdState,
      actions,
      mutations,
      getters
    });

    actions[ActionTypes.FETCH_UNIT_BY_ID](
      {
        state: fetchUnitByIdState,
        commit,
        dispatch,
        getters,
        rootGetters: getters,
        rootState: fetchUnitByIdState
      },
      unitId
    );

    expect(commit).toHaveBeenCalledWith(MutationTypes.SET_UNIT_DETAIL, mockedUnits[0]);
  });
});
