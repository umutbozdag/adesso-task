<template>
  <unit-table-filters @filters-changed="handleFiltersChanged" />
  <unit-table :units="computedUnits || []" :table-headers="tableHeaders" />
</template>

<script setup lang="ts">
import { useStore } from '@/composables/store';
import { type ComputedRef, computed } from 'vue';
import UnitTable from '@/components/UnitTable.vue';
import { createTableHeaders } from '@/config/table';
import UnitTableFilters from '@/components/UnitTableFilters.vue';
import { type StoreUnits } from '@/types/store/State';
import { type CostFilterConfigType } from '@/types/UnitTableFilter';
import { ActionTypes } from '@/types/store/Actions';

const store = useStore();

const units: ComputedRef<StoreUnits> = computed(() => store.getters.units);

const computedUnits = computed(() => {
  if (store.state.filteredUnits && store.state.filteredUnits.length) {
    return store.state.filteredUnits;
  }

  return units.value[store.state.selectedOption];
});

const handleFiltersChanged = (costsFilters: CostFilterConfigType) => {
  store.dispatch(ActionTypes.FILTER_BY_COST, costsFilters);
};

const tableHeaders = createTableHeaders();
</script>
