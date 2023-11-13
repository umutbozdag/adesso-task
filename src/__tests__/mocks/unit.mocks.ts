import UnitDto from '@/dto/UnitDTO';
import { UnitAgeEnum, IUnit } from '@/types/Unit';
import { IUnitDTO } from '@/types/dto/UnitDTO';

export const generateMockUnit = (): IUnit => ({
  id: 1,
  name: 'Archer',
  description: 'Quick and light. Weak at close range; excels at battle from distance',
  expansion: 'Age of Kings',
  age: UnitAgeEnum.Dark,
  cost: {
    Wood: 25,
    Gold: 45
  },
  build_time: 35,
  reload_time: 2,
  attack_delay: 0.35,
  movement_rate: 0.96,
  line_of_sight: 6,
  hit_points: 4,
  range: 30,
  attack: 4,
  armor: '0/0',
  accuracy: '80%'
});

export const generateArrayOfUnits = (count: number): IUnitDTO[] => {
  const units: IUnit[] = [];

  for (let i = 0; i < count; i++) {
    units.push(generateMockUnit());
  }

  return new UnitDto({
    units
  }).units;
};
