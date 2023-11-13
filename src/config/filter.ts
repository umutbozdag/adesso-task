import { UnitAgeEnum } from '@/types/Unit';
import { FilterDropdownOption } from '@/types/FilterDropdown';

export const filterOptionsConfig: FilterDropdownOption[] = [
  {
    label: UnitAgeEnum.All,
    name: UnitAgeEnum.All
  },
  {
    label: UnitAgeEnum.Dark,
    name: UnitAgeEnum.Dark
  },
  {
    label: UnitAgeEnum.Feudal,
    name: UnitAgeEnum.Feudal
  },
  {
    label: UnitAgeEnum.Castle,
    name: UnitAgeEnum.Castle
  },
  {
    label: UnitAgeEnum.Imperial,
    name: UnitAgeEnum.Imperial
  }
];
