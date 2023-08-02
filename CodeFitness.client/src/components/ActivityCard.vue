<template>
  <div class="d-flex flex-column justify-content-between text-center p-3 bg-neutral-dark activity-card">
    <div @click="setActiveActivity()" class="selectable">
      <p class="fw-bold py-2">{{ activityProp.name }}</p>
      <p v-if="activityProp.category">Category: {{ activityProp.category }}</p>
      <p>Muscles: {{ activityProp.muscle.charAt(0).toUpperCase() + activityProp.muscle.slice(1) }}</p>
      <p>Type: {{ activityProp.type.charAt(0).toUpperCase() + activityProp.type.slice(1) }}</p>
      <p>Equipment: {{ activityProp.equipment.charAt(0).toUpperCase() + activityProp.equipment.slice(1).replace('_', ' ')
      }}</p>
      <p>Difficulty: {{ activityProp.difficulty.charAt(0).toUpperCase() + activityProp.difficulty.slice(1) }}</p>
    </div>
    <div>
      <button>Hi</button>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue'
import { activitiesService } from "../services/ActivitiesService.js"
import Pop from "../utils/Pop.js"
import { Modal } from "bootstrap"

export default {
  props: {
    activityProp: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    onMounted(() => {

    })

    return {
      imageBackground: computed(() => `url('https://wger.de/${props.activityProp.image}')`),

      async setActiveActivity() {
        try {
          await activitiesService.setActiveActivity(props.activityProp)
          Modal.getOrCreateInstance('#activeActivity').show()
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-bg {
    background-image: v-bind(imageBackground);
    background-position: center;
    background-size: cover;
  }

  .activity-card {
    min-height: 40vh;
  }
</style>