<template>
  <div class="bg-gray-900 p-6 text-white rounded-md shadow-md" v-if="unit">
    <h2 class="text-2xl font-bold mb-4">{{ unit.name }}</h2>
    <div class="grid grid-cols-2 gap-6">
      <div>
        <p><strong>ID:</strong> {{ unit.id }}</p>
        <p><strong>Description:</strong> {{ unit.description }}</p>
        <p><strong>Age:</strong> {{ unit.age }}</p>
        <p v-if="unit.cost?.Wood"><strong>Wood Cost:</strong> {{ unit.cost?.Wood }}</p>
        <p v-if="unit.cost?.Food"><strong>Food Cost:</strong> {{ unit.cost?.Food }}</p>
        <p v-if="unit.cost?.Gold"><strong>Gold Cost:</strong> {{ unit.cost?.Gold }}</p>
      </div>
      <div>
        <p v-if="unit.buildTime"><strong>Build Time:</strong> {{ unit.buildTime }}</p>
        <p v-if="unit.reloadTime"><strong>Reload Time:</strong> {{ unit.reloadTime }}</p>
        <p><strong>Hit Points:</strong> {{ unit.hitPoints }}</p>
        <p v-if="unit.attack"><strong>Attack:</strong> {{ unit.attack }}</p>
        <p v-if="unit.accuracy"><strong>Accuracy:</strong> {{ unit.accuracy }}</p>
      </div>
    </div>
  </div>
  <not-found v-else />
</template>

<script setup lang="ts">
import { onMounted, computed, ComputedRef } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/composables/store';
import { ActionTypes } from '@/types/store/Actions';
import NotFound from '@/components/NotFound.vue';
import { IUnitDTO } from '@/types/dto/UnitDTO';
const store = useStore();
const router = useRouter();

const unit: ComputedRef<IUnitDTO | null> = computed(() => store.state.unitDetail);

onMounted(async () => {
  const unitId = router.currentRoute.value.params.id;
  store.dispatch(ActionTypes.FETCH_UNIT_BY_ID, Number(unitId));
});
</script>
