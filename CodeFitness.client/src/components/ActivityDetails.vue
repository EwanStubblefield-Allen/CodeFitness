<template>
  <div>
    <div class="text-center">
      <!-- <img class="img-fluid" :src="activity.picture" :alt="activity.name"> -->
      <img v-if="activity.picture" class="img-fluid activity-image" :src="activity.picture" alt="" >
    </div>

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
    <div v-if="routines.length" class="d-flex justify-content-end align-items-center pt-3">
      <p>Add to Routine</p>
      <button v-if="activeRoutine && route.params.routineId" @click="createActivity(activeRoutine.id)" class="mdi mdi-plus mx-2 btn btn-action"></button>
      <button v-else class="mdi mdi-plus mx-2 btn btn-action" data-bs-toggle="dropdown"></button>

      <div class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="authDropdown">
        <div class="list-group text-center">
          <div v-for="r in routines" :key="r.id" @click="createActivity(r.id)" class="list-group-item dropdown-item list-group-item-action selectable">
            <p>{{ r.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import { activitiesService } from "../services/ActivitiesService.js"
import { Modal } from "bootstrap"
import { useRoute } from "vue-router"
import Pop from "../utils/Pop.js"
import { logger } from "../utils/Logger"
import { picturesService } from "../services/PicturesService"

export default {
  setup() {
    const route = useRoute()

    return {
      route,
      activity: computed(() => AppState.activeActivity),
      routines: computed(() => AppState.routines),
      activeRoutine: computed(() => AppState.activeRoutine),
      activeActivity: computed(()=> AppState.activeActivity),

      async createActivity(routineId) {
        try {
          this.activity.routineId = routineId
          await activitiesService.createActivity(this.activity)
          Modal.getOrCreateInstance('#activeActivity').hide()
        } catch (error) {
          Pop.error(error.message, '[CREATING ACTIVITY]')
        }
      }
      // async getNewImage(activityName) {
      //   try {
      //     await picturesService.getNewImage(activityName)
      //   } catch (error) {
      //     Pop.error(error.message)
      //     logger.log(error)
      //   }
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-image{
max-height: 50vh;
max-width: 100vh;

}

</style>