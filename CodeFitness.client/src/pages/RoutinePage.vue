<template>
  <div class="col-12 col-md-10 offset-md-2 d-flex flex-column">
    <section v-if="activeRoutine" class="row text-center bg-neutral-dark text-light p-3">
      <div class="d-flex justify-content-center align-items-center">
        <h1>{{ activeRoutine.title }}</h1>
        <p v-if="points > 0">Points: {{ points }}</p>
      </div>
      <img :src="activeRoutine.picture" alt="User Selected Picture" class="mx-auto p-2">
      <p>{{ activeRoutine.description }}</p>
      <div v-if="activeRoutine.activities[0]" class="col-12 d-flex flex-column flex-md-row overflow-auto p-0">
        <div v-for="act in activeRoutine.activities" :key="act.id" class="d-flex justify-content-center p-3">
          <div class="card card-size text-center fw-bold elevation-5">
            <div class="d-flex flex-column card-body">
              <h2 class="card-title">{{ act.name }}</h2>
              <div class="d-flex flex-column justify-content-between flex-grow-1 card-text">
                <div>
                  <div class="d-flex justify-content-center align-items-center">
                    <h3>Level: {{ act.level }}</h3>
                    <button v-if="points" @click="updateActivity(act)" class="btn btn-action mdi mdi-plus ms-2" type="button"></button>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <h4>Sets: {{ act.sets }}</h4>
                    <h4 v-if="act.type == ('Cardio' || 'Stretching')">Duration: {{ act.reps }}</h4>
                    <h4 v-else>Reps: {{ act.reps }}</h4>
                  </div>
                  <div v-if="act.equipment" class="p-2">
                    <h4>Equipment:</h4>
                    <h4>{{ act.equipment }}</h4>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <button @click="setActiveActivity(act)" class="fs-6 btn btn-action">Activity Details</button>
                  <button class="fs-6 btn btn-danger mdi mdi-trash-can" @click="removeActivity(act)"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <h1>Please Select Activities Below</h1>
      </div>
    </section>

    <div class="row m-3">
      <button @click="setRoutineToEdit()" class="btn btn-info mb-3" title="Edit Routine" type="button" data-bs-toggle="modal" data-bs-target="#editRoutineForm">Edit
        Routine</button>
      <button @click="deleteRoutine()" class="btn btn-danger">
        Delete Routine
      </button>
    </div>

    <section class="row m-3">
      <ActivitySearch />
    </section>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue"
import { AppState } from "../AppState"
import { useRoute, useRouter } from "vue-router"
import { routinesService } from "../services/RoutinesService"
import { activitiesService } from "../services/ActivitiesService.js"
import { Modal } from "bootstrap"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger.js"

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const editable = ref({})

    watchEffect(() => {
      getRoutineById(route.params.routineId)
    })

    async function getRoutineById() {
      try {
        const routineId = route.params.routineId
        await routinesService.getRoutineById(routineId)
      } catch (error) {
        Pop.error(error.message, '[GETTING ROUTINE BY ID]')
      }
    }

    return {
      editable,
      activeRoutine: computed(() => AppState.activeRoutine),
      points: computed(() => {
        let levels = 0
        AppState.activeRoutine.activities.forEach(a => levels += a.level)
        logger.log(AppState.activeRoutine.completeCount - levels)
        return AppState.activeRoutine.completeCount - levels
      }),

      setRoutineToEdit() {
        const routineToEdit = route.params.id

        routinesService.setRoutineToEdit(routineToEdit)
      },

      async deleteRoutine() {
        try {
          const wantsToRemove = await Pop.confirm(`Are you sure you want to delete this routine?`)

          if (!wantsToRemove) {
            return
          }
          const routineId = route.params.routineId
          await routinesService.deleteRoutine(routineId)
          router.push('/')
        } catch (error) {
          Pop.error(error.message)
        }
      },

      async setActiveActivity(act) {
        try {
          await activitiesService.setActiveActivity(act)
          Modal.getOrCreateInstance('#activeActivity').show()
        } catch (error) {
          Pop.error(error.message, '[SETTING ACTIVE ACTIVITY]')
        }
      },

      async updateActivity(activity) {
        try {
          activity.level++
          await activitiesService.updateActivity(activity)
        } catch (error) {
          Pop.error(error.message, '[UPDATING ACTIVITY]')
        }
      },

      async removeActivity(activity) {
        try {
          const wantsToRemove = await Pop.confirm(`Are you sure you want to remove ${activity.name} from this routine?`)

          if (!wantsToRemove) {
            return
          }
          await activitiesService.removeActivity(activity.id)
        } catch (error) {
          Pop.error(error.message, '[DELETING ACTIVITY]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-size {
    height: 100%;
    width: 250px;
  }

  img {
    height: 25vh;
    width: 25vh;
  }
</style>