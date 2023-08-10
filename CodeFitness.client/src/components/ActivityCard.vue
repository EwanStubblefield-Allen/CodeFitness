<template>
  <div class="d-flex flex-column justify-content-between h-100 text-center bg-neutral-dark text-light elevation-5 rounded">
    <div @click="setActiveActivity()" class="selectable p-3">
      <p class="fw-bold py-2">{{ activityProp.name }}</p>
      <p v-if="activityProp.category">Category: {{ activityProp.category }}</p>
      <p>Muscles: {{ activityProp.muscle }}</p>
      <p>Type: {{ activityProp.type }}</p>
      <p>Equipment: {{ activityProp.equipment }}</p>
      <p>Difficulty: {{ activityProp.difficulty }}</p>
    </div>
    <div class="dark-bg text-end p-3 rounded">
      <div v-if="routines.length">
        <button v-if="route.params.routineId" @click="createActivity(activeRoutine.id)" class="btn btn-action">Add to Routine</button>
        <button v-else class="btn btn-action" data-bs-toggle="dropdown">Add to Routine</button>

        <div class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="authDropdown">
          <div class="list-group text-center">
            <div v-for="r in routines" :key="r.id" @click="createActivity(r.id)" class="list-group-item dropdown-item list-group-item-action selectable">
              <p>{{ r.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { activitiesService } from "../services/ActivitiesService.js"
import { Modal } from "bootstrap"
import { computed } from "vue"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import Pop from "../utils/Pop.js"

export default {
  props: {
    activityProp: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const route = useRoute()

    return {
      route,
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines),
      activeRoutine: computed(() => AppState.activeRoutine),
      async setActiveActivity() {
        try {
          await activitiesService.setActiveActivity(props.activityProp)
          Modal.getOrCreateInstance('#activeActivity').show()
        } catch (error) {
          Pop.error(error.message, '[SETTING ACTIVE ACTIVITY]')
        }
      },

      async createActivity(routineId) {
        try {
          const activity = props.activityProp
          activity.routineId = routineId
          await activitiesService.createActivity(activity)
        } catch (error) {
          Pop.error(error.message, '[CREATING ACTIVITY]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>