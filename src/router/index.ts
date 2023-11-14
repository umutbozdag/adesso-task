import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import routeConfigs from '@/config/routes';
import { RoutesNameEnum } from '@/types/Route';

export const routes: RouteRecordRaw[] = [
  {
    path: routeConfigs[RoutesNameEnum.Home].path,
    name: routeConfigs[RoutesNameEnum.Home].name,
    component: HomeView
  },
  {
    path: routeConfigs[RoutesNameEnum.Units].path,
    name: routeConfigs[RoutesNameEnum.Units].name,
    component: () => import(/* webpackChunkName: "Units" */ '@/views/UnitsView.vue')
  },
  {
    path: routeConfigs[RoutesNameEnum.UnitDetails].path,
    name: routeConfigs[RoutesNameEnum.UnitDetails].name,
    component: () => import(/* webpackChunkName: "UnitDetails" */ '@/views/UnitDetailsView.vue')
  },
  {
    path: routeConfigs[RoutesNameEnum.NotFound].path,
    component: () => import(/* webpackChunkName: "NotFound" */ '@/components/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
