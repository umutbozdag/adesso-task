export interface IUnits {
  units: IUnit[];
}

export interface IUnit {
  id: number;
  name: string;
  description: string;
  expansion: UnitExpansionType;
  age: UnitAgeType;
  cost: IUnitCost | null;
  build_time?: number;
  reload_time?: number;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight: number;
  hit_points: number;
  range?: UnitRangeType;
  attack?: number;
  armor: string;
  accuracy?: string;
  attack_bonus?: string[];
  search_radius?: number;
  blast_radius?: number;
  armor_bonus?: string[];
}

export enum UnitAgeEnum {
  All = 'All',
  Feudal = 'Feudal',
  Castle = 'Castle',
  Imperial = 'Imperial',
  Dark = 'Dark'
}

export type UnitAgeType = Exclude<UnitAgeEnum, UnitAgeEnum.All>;

export interface IUnitCost {
  Wood?: number;
  Gold?: number;
  Food?: number;
}

export type UnitExpansionType = 'Age of Kings' | 'The Conquerors';

export type UnitRangeType = number | string;
