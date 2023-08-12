<template>
  <div v-if="routine">
    <img class="img-fluid w-100" :src="routine.picture" :alt="routine.title">
    <div class="py-3">
      <p class="fw-bold">Description:</p>
      <p class="px-2">{{ routine.description }}</p>
    </div>
  </div>

  <div class="d-flex justify-content-end align-items-center pt-3">
    <p>Copy Routine</p>
    <button @click="createCopyRoutine(routine.id)" class="mdi mdi-plus mx-2 btn btn-action"></button>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Modal } from 'bootstrap'
import { routinesService } from '../services/RoutinesService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const router = useRouter()
    return {
      routine: computed(() => AppState.activeRoutine),

      async createCopyRoutine(routineId) {
        try {
          const copyRoutine = await routinesService.createCopyRoutine(routineId)
          Modal.getOrCreateInstance('#activeRoutine').hide()
          router.push({ name: 'Routines', params: { routineId: copyRoutine.id } })
        } catch (error) {
          Pop.error(error.message, '[CREATING COPY ROUTINE]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>