import Getters, { GetterTypes } from '@/types/store/Getters';
import RootState, { StoreUnitsWithoutNull } from '@/types/store/State';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootState, RootState> & Getters = {
  [GetterTypes.UNITS]: (state: RootState) => state.units,
  [GetterTypes.SELECTED_OPTION]: (state) => state.selectedOption,
  [GetterTypes.CURRENT_UNITS_DATA]: (state) =>
    (state.units as StoreUnitsWithoutNull)[state.selectedOption]
};

export default getters;
