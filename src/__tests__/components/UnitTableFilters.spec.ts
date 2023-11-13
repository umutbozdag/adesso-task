import UnitTableFilters from '@/components/UnitTableFilters.vue';
import { VueWrapper, mount } from '@vue/test-utils';
import { expect, it, describe, beforeAll, vi, SpyInstance } from 'vitest';
import { ComponentPublicInstance } from 'vue';
import { createStore } from 'vuex';
import state from '@/store/state';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
import getters from '@/store/getters';
import { FilterDropdownOption } from '@/types/FilterDropdown';
import { key } from '@/composables/store';
import { generateArrayOfUnits } from '../mocks/unit.mocks';

describe('UnitTableFilters', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;
  const store = createStore({
    state,
    actions,
    mutations,
    getters
  });
  let dispatchSpy: SpyInstance;
  beforeAll(() => {
    dispatchSpy = vi.spyOn(store, 'dispatch');
    wrapper = mount(UnitTableFilters, {
      global: {
        plugins: [[store, key]]
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('handleOptionSelected dispatching SET_SELECTED_OPTION', async () => {
    const unitsMock = generateArrayOfUnits(1);
    store.state.units.All = unitsMock;
    const option: FilterDropdownOption = {
      label: 'Option',
      name: 'name'
    };
    wrapper.vm.handleOptionSelected(option);
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
