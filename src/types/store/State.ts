import { UnitAgeEnum } from '@/types/Unit';
import { CostFilterConfigType } from '@/types/UnitTableFilter';
import { IUnitDTO } from '@/types/dto/UnitDTO';

export type StoreUnits = Record<UnitAgeEnum, IUnitDTO[] | null>;
export type StoreUnitsWithoutNull = Record<UnitAgeEnum, IUnitDTO[]>;

interface RootState {
  selectedOption: UnitAgeEnum;
  units: StoreUnits;
  filteredUnits: IUnitDTO[];
  unitDetail: IUnitDTO | null;
  costsFilters: CostFilterConfigType;
}

export default RootState;
