export enum UnitFilterOptionEnum {
  All = 'All',
  Feudal = 'Feudal',
  Castle = 'Castle',
  Imperial = 'Imperial',
  Dark = 'Dark'
}

export interface ICostFilter {
  label: string;
  sliderValue: string;
  selected: boolean;
}

export enum CostFilterEnum {
  WOOD = 'wood',
  FOOD = 'food',
  GOLD = 'gold'
}

export type CostFilterConfigType = Record<CostFilterEnum, ICostFilter>;
