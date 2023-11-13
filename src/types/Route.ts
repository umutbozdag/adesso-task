export enum RoutesNameEnum {
  Home = 'Home',
  Units = 'Units',
  UnitDetails = 'UnitDetails',
  NotFound = 'NotFound'
}

export enum RoutesPathEnum {
  Home = '/',
  Units = '/units',
  UnitDetails = '/units/:id',
  NotFound = '/:pathMatch(.*)*'
}

export interface RouteConfigItem {
  path: RoutesPathEnum;
  name: RoutesNameEnum;
  showInNavbar?: boolean;
  label?: string;
}
