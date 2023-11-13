import RootState from '@/types/store/State';
import { InjectionKey } from 'vue';
import { Store, useStore as baseUseStore } from 'vuex';

export const key: InjectionKey<Store<RootState>> = Symbol();

export function useStore(): Store<RootState> {
  return baseUseStore(key);
}
