<template>
  <div class="unit-table relative py-8">
    <div class="unit-table__wrapper overflow-y-auto">
      <table class="text-sm text-left text-gray-500 w-full table-auto">
        <thead class="text-xs uppercase bg-gray-900 text-gray-200 sticky top-0">
          <tr>
            <unit-table-header-item
              v-for="tableHeader in tableHeaders"
              :key="tableHeader.id"
              :table-header="tableHeader"
            />
          </tr>
        </thead>
        <tbody class="unit-table__rows h-96">
          <unit-table-row-item
            v-for="(unit, idx) in units"
            :key="unit.id"
            :row-index="idx"
            :unit-detail="unit"
            @row-click="handleRowClick"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IUnitDTO } from '@/types/dto/UnitDTO';
import UnitTableRowItem from './UnitTableRowItem.vue';
import UnitTableHeaderItem from './UnitTableHeaderItem.vue';
import { useRouter } from 'vue-router';
import { RoutesNameEnum } from '@/types/Route';
import { IUnitTableHeaderItem } from '@/types/UnitTable';

interface IUnitTableProps {
  units: IUnitDTO[];
  tableHeaders: IUnitTableHeaderItem[];
}

defineProps<IUnitTableProps>();

const router = useRouter();

const handleRowClick = (item: IUnitDTO) => {
  router.push({
    name: RoutesNameEnum.UnitDetails,
    params: {
      id: item.id
    }
  });
};
</script>

<style lang="scss" scoped>
.unit-table {
  &__wrapper {
    max-height: $table-max-height;
  }
}
</style>
