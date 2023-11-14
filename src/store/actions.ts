import { ActionTree } from 'vuex';
import Actions, { ActionTypes } from '@/types/store/Actions';
import RootState from '@/types/store/State';
import { MutationTypes } from '@/types/store/Mutations';
import { IUnits, UnitAgeEnum } from '@/types/Unit';
import UnitDto from '@/dto/UnitDTO';
import { IUnitDTO } from '@/types/dto/UnitDTO';
import { CostFilterEnum } from '@/types/UnitTableFilter';
import filterByCost from '@/utils/filterByCost';

const actions: ActionTree<RootState, RootState> & Actions = {
  async [ActionTypes.FETCH_UNITS]({ commit }) {
    try {
      const response: Response = await fetch(
        `${import.meta.env.VITE_LOCALHOST_URL}/age-of-empires-units.json`
      );
      const data: IUnits = await response.json();

      const dto = new UnitDto(data);
      commit(MutationTypes.SET_UNITS, {
        units: dto.units,
        key: UnitAgeEnum.All
      });
    } catch (e) {
      console.error(e);
    }
  },
  [ActionTypes.SET_SELECTED_OPTION]({ commit, dispatch }, option) {
    commit(MutationTypes.SET_SELECTED_OPTION, option);
    dispatch(ActionTypes.FILTER_BY_AGE, option);
  },
  [ActionTypes.FILTER_BY_AGE]({ commit, state }, age) {
    if (age === UnitAgeEnum.All) {
      return;
    }

    // TODO: Add type for Record<UnitAgeEnum, IUnitDTO[]>
    // If it's not filtered before
    if (!state.units[age]) {
      const filteredUnitsByAge = (state.units as Record<UnitAgeEnum, IUnitDTO[]>)[
        UnitAgeEnum.All
      ].filter((unit) => unit.age === age);
      commit(MutationTypes.SET_UNITS, {
        units: filteredUnitsByAge,
        key: age
      });
    }
  },
  [ActionTypes.FILTER_BY_COST]({ state, dispatch }, costsFilters) {
    const currentUnitsData = state.units[state.selectedOption] as IUnitDTO[];

    const costsUnitsData = currentUnitsData.filter(
      (unit: IUnitDTO) => unit.costs && unit.costs.length
    );

    const costFilters = [
      {
        name: CostFilterEnum.FOOD,
        prop: 'Food'
      },
      {
        name: CostFilterEnum.WOOD,
        prop: 'Wood'
      },
      {
        name: CostFilterEnum.GOLD,
        prop: 'Gold'
      }
    ];

    const currentFilteredData = costsUnitsData.filter((unit) => {
      const filterConditions: boolean[] = [];

      costFilters.forEach((filter) => {
        filterByCost(filter.prop, costsFilters[filter.name], unit, filterConditions);
      });

      return filterConditions.every((condition) => condition);
    });
    dispatch(ActionTypes.SET_FILTERED_UNITS, currentFilteredData);
  },
  [ActionTypes.SET_FILTERED_UNITS]({ commit }, units) {
    commit(MutationTypes.SET_FILTERED_UNITS, units);
  },
  async [ActionTypes.FETCH_UNIT_BY_ID]({ commit, state }, unitId) {
    const units = state.units[state.selectedOption];

    const unitDetail = units?.find((unit) => unit.id === unitId);
    commit(MutationTypes.SET_UNIT_DETAIL, unitDetail);
  },
  [ActionTypes.RESET_COST_FILTERS]({ commit }) {
    commit(MutationTypes.RESET_COST_FILTERS);
  }
};

export default actions;
