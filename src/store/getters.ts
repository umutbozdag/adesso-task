import { UnitAgeEnum } from '@/types/Unit';
import { IUnitDTO } from '@/types/dto/UnitDTO';
import Getters, { GetterTypes } from '@/types/store/Getters';
import RootState from '@/types/store/State';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootState, RootState> & Getters = {
  [GetterTypes.UNITS]: (state: RootState) => state.units,
  [GetterTypes.SELECTED_OPTION]: (state) => state.selectedOption,
  [GetterTypes.CURRENT_UNITS_DATA]: (state) =>
    (state.units as Record<UnitAgeEnum, IUnitDTO[]>)[state.selectedOption]
};

export default getters;
