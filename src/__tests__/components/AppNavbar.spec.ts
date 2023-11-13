import { VueWrapper, mount } from '@vue/test-utils';
import { expect, vi, it, describe, beforeAll } from 'vitest';
import router from '@/router';
import { RoutesNameEnum } from '@/types/Route';
import AppNavbar from '@/components/AppNavbar.vue';
import { ComponentPublicInstance } from 'vue';

describe('AppNavbar', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;

  beforeAll(() => {
    wrapper = mount(AppNavbar, {
      global: {
        plugins: [router]
      }
    });
  });
  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toContain('Home');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('shows routes correctly', async () => {
    expect(wrapper.find('.navbar__item').exists()).toBe(true);
    expect(wrapper.html()).toContain('Home');
    expect(wrapper.html()).toContain('Home');
    await wrapper.find('.navbar__link').trigger('click');
  });

  it('router push', async () => {
    const routerPushSpy = vi.spyOn(router, 'push');
    router.push({ name: RoutesNameEnum.Units });
    expect(routerPushSpy).toHaveBeenCalled();
  });
});
