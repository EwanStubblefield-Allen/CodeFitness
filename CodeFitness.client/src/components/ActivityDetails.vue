<template>
  <div>
    <!-- <img class="img-fluid" :src="activity.picture" :alt="activity.name"> -->
    <video v-if="activity.picture" class="img-fluid w-100" controls autoplay loop :src="activity.picture" type="sample/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="d-flex flex-column flex-md-row justify-content-around text-center pt-2">
      <p>{{ activity.difficulty }}</p>
      <p>{{ activity.type }}</p>
      <p>{{ activity.equipment }}</p>
      <p>{{ activity.muscle }}</p>
    </div>
    <div class="py-3">
      <p class="fw-bold">Instructions:</p>
      <p class="px-2">{{ activity.instructions }}</p>
    </div>
    <div v-if="account.id" class="d-flex justify-content-end align-items-center pt-3">
      <p>Add to Routine</p>
      <button @click="createActivity()" class="mdi mdi-plus mx-2 btn btn-action"></button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import { activitiesService } from "../services/ActivitiesService.js"
import { Modal } from "bootstrap"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    return {
      activity: computed(() => AppState.activeActivity),
      account: computed(() => AppState.account),

      async createActivity() {
        try {
          await activitiesService.createActivity(this.activity)
          Modal.getOrCreateInstance('#activeActivity').hide()
        } catch (error) {
          Pop.error(error.message, '[CREATING ACTIVITY]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>