import RootState, { StoreUnits } from '@/types/store/State';
import { IUnitDTO } from '@/types/dto/UnitDTO';
import { FilterDropdownOption } from '@/types/FilterDropdown';

export enum GetterTypes {
  UNITS = 'units',
  SELECTED_OPTION = 'selectedOption',
  CURRENT_UNITS_DATA = 'currentUnitsData'
}

type Getters = {
  [GetterTypes.UNITS](state: RootState): StoreUnits;
  [GetterTypes.SELECTED_OPTION](state: RootState): FilterDropdownOption['name'];
  [GetterTypes.CURRENT_UNITS_DATA](state: RootState): IUnitDTO[];
};

export default Getters;
