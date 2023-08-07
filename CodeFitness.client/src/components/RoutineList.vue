<template>
  <div data-bs-dismiss="offcanvas">
    <RouterLink :to="{ name: 'Routines', params: { routineId: routine.id } }" v-for="routine in routines" :key="routine.id" class="list-group-item list-group-item-action list-group-item-info d-flex justify-content-between align-items-center text-break p-3 fs-5">
      {{ routine.title }}
      <span class="badge bg-neutral rounded-pill">{{ routine.activities.length }}</span>
    </RouterLink>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'

export default {
  setup() {
    return {
      routines: computed(() => AppState.routines)
    }
  }
}
</script>

<style lang="scss" scoped></style>