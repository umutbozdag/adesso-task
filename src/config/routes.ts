import { RouteConfigItem, RoutesNameEnum, RoutesPathEnum } from '@/types/Route';

const routes: Record<RoutesNameEnum, RouteConfigItem> = {
  [RoutesNameEnum.Home]: {
    path: RoutesPathEnum.Home,
    name: RoutesNameEnum.Home,
    showInNavbar: true,
    label: 'Home'
  },
  [RoutesNameEnum.Units]: {
    path: RoutesPathEnum.Units,
    name: RoutesNameEnum.Units,
    showInNavbar: true,
    label: 'Units'
  },
  [RoutesNameEnum.UnitDetails]: {
    path: RoutesPathEnum.UnitDetails,
    name: RoutesNameEnum.UnitDetails
  },
  [RoutesNameEnum.NotFound]: {
    path: RoutesPathEnum.NotFound,
    name: RoutesNameEnum.NotFound
  }
};

export default routes;
