<template>
  <div v-if="routine">
    <img class="img-fluid w-100" :src="routine.picture" :alt="routine.title">
    <div class="py-3">
      <p class="fw-bold">Description:</p>
      <p class="px-2">{{ routine.description }}</p>
    </div>
  </div>

  <section class="row">
    <div v-for="a in routine?.activities" :key="a.id" class="col-12 col-md-6 py-3">
      <ActivityCard :activityProp="a" />
    </div>
  </section>

  <div class="d-flex justify-content-end align-items-center pt-3">
    <p>Copy Routine</p>
    <button @click="createCopyRoutine(routine.id, routine.community)" class="mdi mdi-plus mx-2 btn btn-action"></button>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Modal } from 'bootstrap'
import { routinesService } from '../services/RoutinesService.js'
import Pop from '../utils/Pop.js'
import ActivityCard from './ActivityCard.vue'

export default {
  setup() {
    const router = useRouter()
    return {
      routine: computed(() => AppState.activeRoutine),

      async createCopyRoutine(routineId, community) {
        try {
          const copyRoutine = await routinesService.createCopyRoutine(routineId, community)
          Modal.getOrCreateInstance('#activeRoutine').hide()
          router.push({ name: 'Routines', params: { routineId: copyRoutine.id } })
        }
        catch (error) {
          Pop.error(error.message, '[CREATING COPY ROUTINE]')
        }
      }
    }
  },
  components: { ActivityCard }
}
</script>

<style lang="scss" scoped></style>