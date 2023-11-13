import RangeSlider from '@/components/RangeSlider.vue';
import { VueWrapper, mount } from '@vue/test-utils';
import { expect, it, describe, beforeAll } from 'vitest';
import { ComponentPublicInstance } from 'vue';

describe('RangeSlider', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;

  beforeAll(() => {
    wrapper = mount(RangeSlider, {
      props: {
        modelValue: '0'
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('handleChange emits event', async () => {
    const input = document.createElement('input');
    input.value = 'input';
    const event = new Event('input');
    input.dispatchEvent(event);
    wrapper.vm.handleChange(event);
    const emittedEvents = wrapper.emitted();
    expect(emittedEvents['update:modelValue']).toHaveLength(1);
    expect(emittedEvents['update:modelValue'][0]).toEqual(['input']);
  });
});
