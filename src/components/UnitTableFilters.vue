<template>
  <h3 class="text-white text-lg font-bold mb-8">Filters</h3>
  <div class="flex items-center">
    <div class="text-white text-md font-semibold mb-4 w-1/6">Ages</div>
    <div class="text-white text-md font-semibold mb-4">Costs</div>
  </div>
  <div class="flex items-baseline">
    <div class="w-1/6">
      <filter-dropdown
        :options="filterOptionsConfig"
        @option-selected="handleOptionSelected"
        :selected-option="selectedOption"
        :selected-option-label="dropdownSelectedOptionLabel"
      />
    </div>

    <span
      class="flex items-center"
      v-for="(filter, filterIndex) in costsFilters"
      :key="filterIndex"
    >
      <range-slider v-model="filter.sliderValue" :disabled="!filter.selected">
        <filter-checkbox v-model="filter.selected" :key="filterIndex" />
        <template #slider-label> {{ filter.label }} </template>
      </range-slider>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/composables/store';
import FilterDropdown from '@/components/FilterDropdown.vue';
import { filterOptionsConfig } from '@/config/filter';
import { FilterDropdownOption } from '@/types/FilterDropdown';
import { computed, watch, nextTick } from 'vue';
import RangeSlider from '@/components/RangeSlider.vue';
import { ActionTypes } from '@/types/store/Actions';
import FilterCheckbox from './FilterCheckbox.vue';
import { CostFilterConfigType } from '@/types/UnitTableFilter';

const store = useStore();

const emit = defineEmits<{
  (e: 'filters-changed', filters: CostFilterConfigType): void;
}>();

const costsFilters = computed(() => store.state.costsFilters);
const dropdownSelectedOptionLabel = 'Ages';

watch(
  costsFilters,
  (newCostsFilter) => {
    emit('filters-changed', newCostsFilter);
  },
  {
    deep: true
  }
);

const selectedOption = computed(() => store.getters.selectedOption);

const handleOptionSelected = async (option: FilterDropdownOption) => {
  store.dispatch(ActionTypes.RESET_COST_FILTERS);
  await nextTick();
  store.dispatch(ActionTypes.SET_FILTERED_UNITS, []);
  store.dispatch(ActionTypes.SET_SELECTED_OPTION, option.name);
};
</script>
