import UnitTableHeaderItem from '@/components/UnitTableHeaderItem.vue';
import { VueWrapper, mount } from '@vue/test-utils';
import { expect, it, describe, beforeAll } from 'vitest';
import { ComponentPublicInstance } from 'vue';
import { createTableHeaders } from '@/config/table';

describe('UnitTableFilters', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;
  beforeAll(() => {
    wrapper = mount(UnitTableHeaderItem, {
      props: {
        tableHeader: createTableHeaders()[0]
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('shows label correct', async () => {
    expect(wrapper.html()).toContain('ID');
  });
});
