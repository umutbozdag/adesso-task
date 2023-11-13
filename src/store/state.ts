import { UnitAgeEnum } from '@/types/Unit';
import { CostFilterEnum } from '@/types/UnitTableFilter';
import RootState from '@/types/store/State';

const state: RootState = {
  selectedOption: UnitAgeEnum.All,
  units: {
    [UnitAgeEnum.All]: null,
    [UnitAgeEnum.Castle]: null,
    [UnitAgeEnum.Dark]: null,
    [UnitAgeEnum.Feudal]: null,
    [UnitAgeEnum.Imperial]: null
  },
  filteredUnits: [],
  unitDetail: null,
  costsFilters: {
    [CostFilterEnum.WOOD]: {
      label: 'Wood',
      sliderValue: '0',
      selected: false
    },
    [CostFilterEnum.FOOD]: {
      label: 'Food',
      sliderValue: '0',
      selected: false
    },
    [CostFilterEnum.GOLD]: {
      label: 'Gold',
      sliderValue: '0',
      selected: false
    }
  }
};

export default state;
