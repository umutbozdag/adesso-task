import FilterDropdown from '@/components/FilterDropdown.vue';
import { UnitAgeEnum } from '@/types/Unit';
import { VueWrapper, mount } from '@vue/test-utils';
import { OnClickOutside } from '@vueuse/components';
import { expect, it, describe, beforeAll } from 'vitest';
import { ComponentPublicInstance } from 'vue';

describe('FilterDropdown', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;

  beforeAll(() => {
    wrapper = mount(FilterDropdown, {
      props: {
        options: [
          { name: 'option1', label: 'Option 1' },
          { name: 'option2', label: 'Option 2' }
        ],
        selectedOption: UnitAgeEnum.All,
        selectedOptionLabel: 'Ages'
      },
      global: {
        directives: {
          'on-click-outside': OnClickOutside
        }
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('toggles dropdown visibility on button click', async () => {
    expect(wrapper.find('.origin-top-right').exists()).toBe(false);
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('.origin-top-right').exists()).toBe(true);
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('.origin-top-right').exists()).toBe(false);
  });

  it('emits OPTION_SELECT event on option click', async () => {
    await wrapper.find('button').trigger('click');
    await wrapper.find('.flex').trigger('click');
    const emittedEvent = wrapper.emitted('option-selected');
    expect(emittedEvent).toBeTruthy();
    if (emittedEvent) {
      expect(emittedEvent[0]).toEqual([{ name: 'option1', label: 'Option 1' }]);
    }
  });
});
