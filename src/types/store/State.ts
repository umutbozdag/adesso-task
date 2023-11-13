import { UnitAgeEnum } from '../Unit';
import { CostFilterConfigType } from '../UnitTableFilter';
import { IUnitDTO } from '../dto/UnitDTO';

export type StoreUnits = Record<UnitAgeEnum, IUnitDTO[] | null>;

interface RootState {
  selectedOption: UnitAgeEnum;
  units: StoreUnits;
  filteredUnits: IUnitDTO[];
  unitDetail: IUnitDTO | null;
  costsFilters: CostFilterConfigType;
}

export default RootState;
