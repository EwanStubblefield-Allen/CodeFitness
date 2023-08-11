<template>
  <img class="img-fluid w-100" :src="routine.picture" :alt="routine.title">
  <div class="py-3">
    <p class="fw-bold">Description:</p>
    <p class="px-2">{{ routine.description }}</p>
  </div>

  <div class="d-flex justify-content-end align-items-center pt-3">
    <p>Copy Routine</p>
    <button @click="createCopyRoutine(routine)" class="mdi mdi-plus mx-2 btn btn-action"></button>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { copyRoutinesService } from '../services/CopyRoutinesService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    return {
      routine: computed(() => AppState.activeRoutine),

      async createCopyRoutine(routineId) {
        try {
          await copyRoutinesService.createCopyRoutine(routineId)
        } catch (error) {
          Pop.error(error.message, '[CREATING COPY ROUTINE]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>