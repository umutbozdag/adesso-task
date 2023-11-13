import { IUnitTableHeaderItem } from '@/types/UnitTable';

export function createTableHeaders(): IUnitTableHeaderItem[] {
  return [
    {
      id: 'id',
      label: 'ID'
    },
    {
      id: 'name',
      label: 'Name'
    },
    {
      id: 'age',
      label: 'Age'
    },
    {
      id: 'costs',
      label: 'Costs'
    }
  ];
}
