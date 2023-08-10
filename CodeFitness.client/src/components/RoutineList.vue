<template>
  <div class="col-12 d-flex flex-column justify-content-between">
    <div class="list-group">
      <div v-for="routine in routines" :key="routine.id" class="list-group-item list-group-item-action list-group-item-info" data-bs-dismiss="offcanvas">
        <RouterLink :to="{ name: 'Routines', params: { routineId: routine.id } }" class=" d-flex justify-content-between align-items-center text-break fs-5">
          <p class="text-dark">{{ routine.title }}</p>
          <div class="d-flex align-items-center">
            <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: routine.id } }">
              <button v-if="routine.activities.length" type="button" class="btn text-light selectable no-select text-dark mdi mdi-play fs-3" title="Start Routine"></button>
            </RouterLink>
            <span class="badge bg-primary rounded-pill">{{ routine.activities.length }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
    <button class="btn btn-action" type="button" data-bs-toggle="modal" data-bs-target="#routineForm">Create Routine</button>
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