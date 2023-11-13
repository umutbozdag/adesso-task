<template>
  <div class="flex items-center justify-center h-64">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-800">404</h1>
      <p class="text-2xl font-semibold text-gray-600 mb-4">Not Found</p>
      <router-link :to="{ name: RoutesNameEnum.Home }" class="text-blue-500 hover:underline"
        >Go back to Home</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RoutesNameEnum } from '@/types/Route';
</script>
