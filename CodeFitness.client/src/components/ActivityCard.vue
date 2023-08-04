<template>
  <div class="d-flex flex-column justify-content-between text-center bg-neutral-dark text-light activity-card">
    <div @click="setActiveActivity()" class="selectable p-3">
      <p class="fw-bold py-2">{{ activityProp.name }}</p>
      <p v-if="activityProp.category">Category: {{ activityProp.category }}</p>
      <p>Muscles: {{ activityProp.muscle }}</p>
      <p>Type: {{ activityProp.type }}</p>
      <p>Equipment: {{ activityProp.equipment }}</p>
      <p>Difficulty: {{ activityProp.difficulty }}</p>
    </div>
    <div class="dark-bg text-end p-3">
      <button @click="createActivity(activityProp)" class="btn btn-action">Add to Routine</button>
    </div>
  </div>
</template>

<script>
import { activitiesService } from "../services/ActivitiesService.js"
import { Modal } from "bootstrap"
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger"

export default {
  props: {
    activityProp: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    return {
      async setActiveActivity() {
        try {
          await activitiesService.setActiveActivity(props.activityProp)
          Modal.getOrCreateInstance('#activeActivity').show()
        } catch (error) {
          Pop.error(error.message, '[SETTING ACTIVE ACTIVITY]')
        }
      },

      async createActivity(activityId) {
        try {
          await activitiesService.createActivity(activityId)
        } catch (error) {
          Pop.error(error.message, '[CREATING ACTIVITY]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .activity-card {
    min-height: 40vh;
  }
</style>