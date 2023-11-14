import type { IUnitCost, UnitAgeType, UnitExpansionType, UnitRangeType } from '@/types/Unit';

export interface IUnitDTO {
  id: number;
  name: string;
  description: string;
  expansion: UnitExpansionType;
  age: UnitAgeType;
  costs: IUnitCostDTO[] | null;
  cost: IUnitCost | null;
  buildTime?: number | null;
  reloadTime?: number | null;
  attackDelay?: number | null;
  movementRate?: number | null;
  lineOfSight: number;
  hitPoints: number;
  range?: UnitRangeType | null;
  attack?: number | null;
  armor: string;
  accuracy?: string | null;
  attackBonus?: string[] | null;
  searchRadius?: number | null;
  blastRadius?: number | null;
  armorBonus?: string[] | null;
}

export interface IUnitCostDTO {
  label: string;
  name: string;
  value: number;
}
