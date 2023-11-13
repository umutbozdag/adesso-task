<template>
  <div class="flex items-center">
    <slot></slot>
    <label class="text-sm font-medium text-white mr-2">
      <slot name="slider-label"></slot>
    </label>
    <input
      type="range"
      :value="modelValue"
      :min="min"
      :max="max"
      :disabled="disabled"
      @change="handleChange"
      class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
    />
  </div>
  <span v-if="modelValue !== '0'" class="text-white ml-2 mr-8"
    >{{ MIN_DEFAULT }} - {{ modelValue }}</span
  >
</template>

<script setup lang="ts">
interface IRangeSliderProps {
  min?: number;
  max?: number;
  modelValue: string;
  disabled?: boolean;
}
const emit = defineEmits<{
  (e: 'update:modelValue', id: string): void;
}>();

const MIN_DEFAULT = 0;

withDefaults(defineProps<IRangeSliderProps>(), {
  min: 0,
  max: 200,
  modelValue: '0',
  disabled: false
});

const handleChange = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>
