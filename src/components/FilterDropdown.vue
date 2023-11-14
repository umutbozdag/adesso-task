<template>
  <div class="z-10 inline-block" v-on-click-outside="closeDropdown">
    <button
      @click="isOpen = !isOpen"
      class="justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
    >
      {{ selectedOptionLabel }}: {{ selectedOption }}
    </button>
    <div
      v-if="isOpen"
      class="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg z-10 bg-gray-900 ring-1 ring-black ring-opacity-5"
    >
      <div class="py-2 p-2" role="menu">
        <a
          v-for="option in options"
          :key="option.name"
          class="flex rounded-md px-4 py-2 text-sm text-white hover:bg-gray-800 cursor-pointer"
          role="menuitem"
          @click="handleOptionClick(option)"
        >
          {{ option.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UnitAgeEnum } from '@/types/Unit';
import { FilterDropdownOption, FilterDropdownEmitEnum } from '@/types/FilterDropdown';
import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

interface IFilterDropdownProps {
  options: FilterDropdownOption[];
  selectedOption: UnitAgeEnum;
  selectedOptionLabel: string;
}

defineProps<IFilterDropdownProps>();

const emit = defineEmits<{
  (event: 'option-selected', option: FilterDropdownOption): void;
}>();

const isOpen = ref(false);

const closeDropdown = () => {
  isOpen.value = false;
};

const handleOptionClick = (option: FilterDropdownOption) => {
  emit(FilterDropdownEmitEnum.OPTION_SELECTED, option);
  closeDropdown();
};
</script>
@/types/FilterDropdown
