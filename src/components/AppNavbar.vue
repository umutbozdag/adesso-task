<template>
  <nav class="navbar bg-black border-gray-200 mb-12">
    <div class="flex flex-wrap items-center justify-between mx-auto py-4">
      <a class="flex items-center">
        <span class="self-center text-2xl font-semibold text-white">App</span>
      </a>
      <ul
        class="font-medium flex rounded-lg bg-black flex-row md:space-x-8 rtl:space-x-reverse mt-0 border-0 border-gray-700"
      >
        <template v-for="route in routes" :key="route.name">
          <li class="navbar__item" v-if="route.showInNavbar">
            <router-link
              :to="{ name: route.name }"
              class="navbar__link rounded md:bg-transparent px-2 py-1 text-white"
              >{{ route.label }}</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import routes from '@/config/routes';
</script>

<style lang="scss" scoped>
.navbar__link {
  &:hover {
    color: $color-beige;
    transition: 0.2s ease;
  }
}

.router-link-exact-active {
  background-color: $active-route-bg;
  color: $color-beige;
}
</style>
