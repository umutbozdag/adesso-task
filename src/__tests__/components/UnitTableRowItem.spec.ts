import UnitTableRowItem from '@/components/UnitTableRowItem.vue';
import { VueWrapper, mount } from '@vue/test-utils';
import { expect, it, describe, beforeAll } from 'vitest';
import { ComponentPublicInstance } from 'vue';
import { generateArrayOfUnits } from '../mocks/unit.mocks';

describe('UnitTableRowItem', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;
  beforeAll(() => {
    wrapper = mount(UnitTableRowItem, {
      props: {
        rowIndex: 0,
        unitDetail: generateArrayOfUnits(1)[0]
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`emits 'row-clicked' event when handleRowClick`, async () => {
    wrapper.vm.handleRowClick();
    const emittedEvents = wrapper.emitted();
    expect(emittedEvents['row-clicked']).toHaveLength(1);
  });
});
