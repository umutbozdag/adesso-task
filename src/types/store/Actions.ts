import { ActionContext } from 'vuex';
import RootState from '@/types/store/State';
import { UnitAgeEnum } from '@/types/Unit';
import { CostFilterConfigType } from '@/types/UnitTableFilter';
import { IUnitDTO } from '@/types/dto/UnitDTO';

export enum ActionTypes {
  FETCH_UNITS = 'fetchUnits',
  SET_SELECTED_OPTION = 'setSelectedOption',
  FILTER_BY_AGE = 'filterByAge',
  FILTER_BY_COST = 'filterByCost',
  SET_FILTERED_UNITS = 'setFilteredUnits',
  FETCH_UNIT_BY_ID = 'fetchUnitById',
  RESET_COST_FILTERS = 'resetCostFilters'
}

type Actions = {
  [ActionTypes.FETCH_UNITS](context: ActionContext<RootState, RootState>): Promise<void>;
  [ActionTypes.SET_SELECTED_OPTION](
    context: ActionContext<RootState, RootState>,
    option: UnitAgeEnum
  ): void;
  [ActionTypes.FILTER_BY_AGE](context: ActionContext<RootState, RootState>, age: UnitAgeEnum): void;
  [ActionTypes.FILTER_BY_COST](
    context: ActionContext<RootState, RootState>,
    filterCosts: CostFilterConfigType
  ): void;
  [ActionTypes.SET_FILTERED_UNITS](
    context: ActionContext<RootState, RootState>,
    units: IUnitDTO[]
  ): void;
  [ActionTypes.FETCH_UNIT_BY_ID](
    context: ActionContext<RootState, RootState>,
    unitId: number
  ): void;
  [ActionTypes.RESET_COST_FILTERS](context: ActionContext<RootState, RootState>): void;
};

export default Actions;
