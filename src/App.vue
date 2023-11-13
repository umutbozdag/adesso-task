<template>
  <div class="app bg-black h-screen">
    <div class="container mx-auto">
      <app-navbar />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import { onMounted } from 'vue';
import { ActionTypes } from '@/types/store/Actions';
import { useStore } from '@/composables/store';
const store = useStore();

onMounted(async () => {
  await store.dispatch(ActionTypes.FETCH_UNITS);
});
</script>
