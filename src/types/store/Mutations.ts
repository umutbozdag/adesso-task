import RootState from '@/types/store/State';
import { UnitAgeEnum } from '@/types/Unit';
import { IUnitDTO } from '@/types/dto/UnitDTO';

export enum MutationTypes {
  SET_SELECTED_OPTION = 'setSelectedOption',
  SET_UNITS = 'setUnits',
  SET_FILTERED_UNITS = 'setFilteredUnits',
  SET_UNIT_DETAIL = 'setUnitDetail',
  RESET_COST_FILTERS = 'resetCostFilters'
}

type Mutations = {
  [MutationTypes.SET_SELECTED_OPTION](state: RootState, option: UnitAgeEnum): void;
  [MutationTypes.SET_UNITS](
    state: RootState,
    params: {
      units: IUnitDTO[];
      key: UnitAgeEnum;
    }
  ): void;
  [MutationTypes.SET_FILTERED_UNITS](state: RootState, units: IUnitDTO[]): void;
  [MutationTypes.SET_UNIT_DETAIL](state: RootState, unit: IUnitDTO): void;
  [MutationTypes.RESET_COST_FILTERS](state: RootState): void;
};

export default Mutations;
