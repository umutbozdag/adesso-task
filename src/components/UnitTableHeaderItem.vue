<template>
  <th class="px-6 py-3">
    {{ tableHeader.label }}
  </th>
</template>

<script setup lang="ts">
import { IUnitTableHeaderItem } from '@/types/UnitTable';

interface IUnitTableHeaderItemProps {
  tableHeader: IUnitTableHeaderItem;
}

defineProps<IUnitTableHeaderItemProps>();
</script>
