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
      <button @click="addActivity(activityProp)" class="btn btn-info">Add to Routine</button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { activitiesService } from "../services/ActivitiesService.js"
import { Modal } from "bootstrap"
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger.js"

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
      },
      
      async addActivity(activityId) {
        try{
          logger.log(activityId)
          await activitiesService.addActivity(activityId)
            
        } catch(error) {
            Pop.error(error.message);
            logger.log(error);
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