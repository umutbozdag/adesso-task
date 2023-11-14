import filterByCost from '@/utils/filterByCost';
import { describe, expect, it } from 'vitest';
import { generateArrayOfUnits } from '../mocks/unit.mocks';
import { CostFilterEnum } from '@/types/UnitTableFilter';

describe('utils/filterByCost', () => {
  it('updates filterConditions correctly', () => {
    const costsFilters = {
      [CostFilterEnum.WOOD]: {
        label: 'Wood',
        sliderValue: '50',
        selected: true
      }
    };
    const filterConditions: boolean[] = [];
    filterByCost(
      'Wood',
      costsFilters[CostFilterEnum.WOOD],
      generateArrayOfUnits(1)[0],
      filterConditions
    );
    expect(filterConditions).toHaveLength(1);
  });
});
