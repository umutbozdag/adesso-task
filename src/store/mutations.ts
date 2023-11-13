import RootState from '@/types/store/State';
import { MutationTree } from 'vuex';
import Mutations, { MutationTypes } from '@/types/store/Mutations';
import { CostFilterEnum } from '@/types/UnitTableFilter';

const mutations: MutationTree<RootState> & Mutations = {
  [MutationTypes.SET_SELECTED_OPTION](state, option) {
    state.selectedOption = option;
  },
  [MutationTypes.SET_UNITS](state, { units, key }) {
    state.units[key] = units;
  },
  [MutationTypes.SET_FILTERED_UNITS](state, units) {
    state.filteredUnits = units;
  },
  [MutationTypes.SET_UNIT_DETAIL](state, unit) {
    state.unitDetail = unit;
  },
  [MutationTypes.RESET_COST_FILTERS](state) {
    Object.keys(state.costsFilters).forEach((key) => {
      state.costsFilters[key as CostFilterEnum].selected = false;
      state.costsFilters[key as CostFilterEnum].sliderValue = '0';
    });
  }
};
export default mutations;
