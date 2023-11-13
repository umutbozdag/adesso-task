<template>
  <tr
    class="border-b bg-gray-800 border-gray-700 text-gray-300 cursor-pointer hover:bg-gray-700"
    :class="[rowIndex % 2 === 0 ? 'table__row--even' : '']"
    @click="handleRowClick"
  >
    <!-- TODO: get 'id' from header and render based on that -->
    <!-- OR -->
    <!-- TODO: use 'label' props to pass data and use a slot for more advanced things (rendering costs array) -->
    <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
      {{ unitDetail.id }}
    </td>
    <td class="px-6 py-4">{{ unitDetail.name }}</td>
    <td class="px-6 py-4">{{ unitDetail.age }}</td>
    <td class="px-6 py-4">
      <template v-if="unitDetail.costs && unitDetail.costs.length">
        <span v-for="(cost, idx) in unitDetail.costs" :key="cost.name">
          {{ cost.name }}: {{ cost.value
          }}<template v-if="idx !== unitDetail.costs.length - 1">, </template>
        </span>
      </template>
      <template v-else> No data </template>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { IUnitDTO } from '@/types/dto/UnitDTO';

interface UnitTableRowItemProps {
  unitDetail: IUnitDTO;
  rowIndex: number;
}

const emit = defineEmits<{
  (e: 'row-click', unit: IUnitDTO): void;
}>();

const props = defineProps<UnitTableRowItemProps>();

const handleRowClick = () => {
  emit('row-click', props.unitDetail);
};
</script>
