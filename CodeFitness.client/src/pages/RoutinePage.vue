<template>
  <div class="col-12 col-md-10 offset-md-2 d-flex flex-column">
    <section v-if="activeRoutine" class="row text-center bg-neutral-dark text-light p-3 bg-img">
      <div class="col-12 d-flex justify-content-between align-items-center dropdown z-1">
        <section class="row justify-content-between align-items-center flex-grow-1 p-2 bg-title">
          <p class="col-3 text-start fs-5">Available Levels: {{ points }}</p>
          <p class="col-6 fs-1">{{ activeRoutine.title }}</p>
          <div class="col-3 text-end">
            <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: activeRoutine.id } }">
              <button v-if="activeRoutine.activities[0]" type="button" class="btn text-light selectable no-select mdi mdi-play fs-3" title="Start Routine"></button>
            </RouterLink>
            <button type="button" class="btn text-light selectable no-select mdi mdi-dots-horizontal fs-3" data-bs-toggle="dropdown" aria-expanded="false" title="More Options"></button>

            <div class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="authDropdown">
              <div class="list-group text-center">
                <div class="list-group-item dropdown-item list-group-item-action selectable" data-bs-toggle="modal" data-bs-target="#routineForm">
                  <p class="mdi mdi-pencil">Edit Routine</p>
                </div>

                <div @click="removeRoutine()" class="list-group-item dropdown-item list-group-item-action text-danger selectable">
                  <p class="mdi mdi-trash-can">Delete Routine</p>
                </div>
              </div>
            </div>
          </div>
          <p class="col-12">{{ activeRoutine.description }}</p>
        </section>
      </div>
      <div v-if="activeRoutine.activities[0]" class="col-12 d-flex flex-column flex-md-row overflow-auto p-0">
        <div v-for="act in activeRoutine.activities" :key="act.id" class="d-flex justify-content-center p-3">
          <div class="card card-size text-center fw-bold elevation-5">
            <div class="d-flex flex-column card-body">
              <h2 class="card-title">{{ act.name }}</h2>

              <div class="d-flex flex-column justify-content-between flex-grow-1 card-text">
                <div>
                  <div class="d-flex justify-content-center align-items-center">
                    <h3 v-if="!points">Level: {{ act.level }}</h3>

                    <button v-else @click="updateActivity(act, 1)" class="btn btn-action fs-4" type="button">
                      Level: {{ act.level }} +
                    </button>
                  </div>

                  <div class="d-flex justify-content-between p-2">
                    <h4 v-if="edit != act.id">Sets: {{ act.sets }}</h4>
                    <h4 v-else class="d-flex align-items-center">Sets:
                      <input v-model="editable" type="number" class="form-control" min="1" :max="act.reps" required>
                    </h4>
                    <h4 v-if="act.type == ('Cardio' || 'Stretching')">Duration: {{ act.reps }}</h4>
                    <h4 v-else>Reps: {{ Math.ceil(act.reps / act.sets) }}</h4>
                  </div>

                  <div v-if="act.equipment" class="p-2">
                    <h4>Equipment:</h4>
                    <h4>{{ act.equipment }}</h4>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <button @click="setActiveActivity(act)" class="fs-6 btn btn-action">Activity Details</button>
                  <button v-if="edit != act.id" type="button" class="btn selectable no-select mdi mdi-dots-horizontal fs-3" data-bs-toggle="dropdown" aria-expanded="false" title="More Options"></button>
                  <button v-else @click="updateActivity(act, 0), edit = ''" type="button" class="btn btn-action selectable no-select fs-6">Save</button>

                  <div class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="authDropdown">
                    <div class="list-group text-center">
                      <div @click="edit = act.id" class="list-group-item dropdown-item list-group-item-action selectable">
                        <p class="mdi mdi-pencil">Edit Sets</p>
                      </div>

                      <div @click="removeActivity(act)" class="list-group-item dropdown-item list-group-item-action text-danger selectable">
                        <p class="mdi mdi-trash-can">Delete Activity</p>
                      </div>
                    </div>
                  </div>
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

    <section class="row m-3 justify-content-center">
      <ActivitySearch />
    </section>
  </div>
</template>

<script>
import { computed, onUnmounted, ref, watchEffect } from "vue"
import { AppState } from "../AppState"
import { useRoute, useRouter } from "vue-router"
import { routinesService } from "../services/RoutinesService"
import { activitiesService } from "../services/ActivitiesService.js"
import { Modal } from "bootstrap"
import Pop from "../utils/Pop"

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const editable = ref('')
    const edit = ref('')

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
    })

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
      edit,
      activeRoutine: computed(() => AppState.activeRoutine),
      routineBackground: computed(() => `url(${AppState.activeRoutine?.picture})`),
      points: computed(() => {
        let levels = 0
        AppState.activeRoutine.activities.forEach(a => levels += a.level)
        return AppState.activeRoutine.completeCount - levels
      }),

      async setActiveActivity(act) {
        try {
          await activitiesService.setActiveActivity(act)
          Modal.getOrCreateInstance('#activeActivity').show()
        } catch (error) {
          Pop.error(error.message, '[SETTING ACTIVE ACTIVITY]')
        }
      },

      async updateActivity(activity, level) {
        try {
          if (!level) {
            activity.sets = editable.value
          } else {
            activity.level += level
          }
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
      },

      async removeRoutine() {
        try {
          const wantsToRemove = await Pop.confirm(`Are you sure you want to delete ${AppState.activeRoutine.title}?`)

          if (!wantsToRemove) {
            return
          }
          await routinesService.removeRoutine(route.params.routineId)
          router.push('/')
        } catch (error) {
          Pop.error(error.message, '[DELETING ROUTINE]')
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

  .bg-img {
    background-image: v-bind(routineBackground);
    background-position: center;
    background-size: cover;
    background-repeat: none;
  }

  .bg-title {
    background: rgba(64, 107, 110, .6);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(64, 107, 110, 0.3);
  }
</style>