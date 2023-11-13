import UnitTable from '@/components/UnitTable.vue';
import { VueWrapper, mount } from '@vue/test-utils';
import { expect, it, describe, beforeAll, vi } from 'vitest';
import { ComponentPublicInstance } from 'vue';
import { generateArrayOfUnits } from '../mocks/unit.mocks';
import router from '@/router';
import { RoutesNameEnum } from '@/types/Route';
import { createTableHeaders } from '@/config/table';

describe('UnitTable', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;

  beforeAll(() => {
    wrapper = mount(UnitTable, {
      global: {
        plugins: [router]
      },
      props: {
        tableHeaders: createTableHeaders(),
        units: generateArrayOfUnits(1)
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('handleRowClick pushing to Unit Details page', async () => {
    const routerPushSpy = vi.spyOn(router, 'push');
    const unitMock = generateArrayOfUnits(1)[0];
    wrapper.vm.handleRowClick(unitMock);
    expect(routerPushSpy).toHaveBeenCalledWith({
      name: RoutesNameEnum.UnitDetails,
      params: {
        id: unitMock.id
      }
    });
  });
});
