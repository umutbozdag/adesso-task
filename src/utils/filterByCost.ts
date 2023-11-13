import { ICostFilter } from '@/types/UnitTableFilter';
import { IUnitDTO } from '@/types/dto/UnitDTO';

const filterByCost = (
  costType: string,
  filter: ICostFilter,
  unit: IUnitDTO,
  filterConditions: boolean[]
) => {
  const cost = unit.costs?.find((cost) => cost.name === costType);
  if (filter.selected && Number(filter.sliderValue) > 0 && cost) {
    filterConditions.push(cost.value > 0 && cost.value <= Number(filter.sliderValue));
  }
};

export default filterByCost;
