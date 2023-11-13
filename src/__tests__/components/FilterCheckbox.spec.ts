import { ComponentPublicInstance } from 'vue';
import FilterCheckbox from '@/components/FilterCheckbox.vue';
import { beforeAll, describe, expect, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';

describe('Checkbox Component', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;

  beforeAll(() => {
    wrapper = mount(FilterCheckbox, {
      props: {
        modelValue: false
      }
    });
  });
  it('renders checkbox correctly', () => {
    const checkbox = wrapper.find('input');
    expect(checkbox.exists()).toBe(true);
    expect(wrapper.props().modelValue).toBe(false);
    expect(wrapper.props().label).toBe('');
    expect(checkbox.attributes().checked).toBeFalsy();
  });

  it('toggles checkbox state on change', async () => {
    wrapper = mount(FilterCheckbox, {
      props: {
        modelValue: true,
        label: 'Checkbox'
      }
    });

    expect(wrapper.props().modelValue).toEqual(true);
    expect(wrapper.html().includes('Checkbox'));
  });

  it('emits update:modelValue event on toggleCheckbox', () => {
    const input = document.createElement('input');
    input.checked = true;
    const event = new Event('input');
    input.dispatchEvent(event);
    wrapper.vm.toggleCheckbox(event);
    const emittedEvents = wrapper.emitted();
    expect(emittedEvents['update:modelValue']).toHaveLength(1);
  });
});
