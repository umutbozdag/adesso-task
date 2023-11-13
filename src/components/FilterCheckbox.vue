<template>
  <div class="flex items-center mr-1">
    <input
      type="checkbox"
      :checked="modelValue"
      :value="modelValue"
      @change="toggleCheckbox"
      class="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
    />
    <label v-if="label" class="text-sm font-medium text-gray-300 mr-2">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
interface IFilterCheckboxProps {
  modelValue: boolean;
  label?: string;
}

withDefaults(defineProps<IFilterCheckboxProps>(), {
  modelValue: false,
  label: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', isChecked: boolean): void;
}>();

const toggleCheckbox = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).checked);
};
</script>
