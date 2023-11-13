import { Store, createStore } from 'vuex';
import actions from './actions';
import RootState from '@/types/store/State';
import state from './state';
import mutations from './mutations';
import getters from './getters';

const store = createStore<RootState>({
  state,
  mutations,
  actions,
  getters
});

export default store as Store<RootState>;
