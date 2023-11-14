<template>
  <div class="flex items-center mr-3">
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
    <span v-if="modelValue !== '0'" class="text-white w-1/2 ml-2"
      >{{ MIN_DEFAULT }} - {{ modelValue }}</span
    >
    <span class="text-white ml-2 mr-2" v-else>-</span>
  </div>
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
