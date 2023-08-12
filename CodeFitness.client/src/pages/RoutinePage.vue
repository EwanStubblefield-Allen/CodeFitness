<template>
  <div class="col-12 col-md-10 offset-md-2 d-flex flex-column ">
    <section v-if="activeRoutine" class="row text-center bg-neutral-dark text-light p-3 bg-img">
      <div class="col-12 d-flex justify-content-between align-items-center dropdown z-1">
        <section class="row justify-content-between align-items-center flex-grow-1 p-2 bg-title">
          <p class="col-3 text-start fs-5">Available Levels: {{ points }}</p>
          <div class="col-6">
            <p class=" fs-1 text-break">{{ activeRoutine.title }}</p>
            <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: activeRoutine.id } }">
              <button v-if="activeRoutine.activities.length" type="button" class="btn text-light selectable no-select mdi mdi-play fs-1" title="Start Routine"></button>
            </RouterLink>
            <Tour v-if="activeRoutine.activities == 0 || wantsTour == true " :steps="steps" :callbacks="callbacks"/>
          </div>

          <div class="col-3 text-end">

            <button type="button" class="btn text-light selectable no-select mdi mdi-dots-horizontal fs-3" data-bs-toggle="dropdown" aria-expanded="false" title="More Options"></button>

            <div class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="authDropdown">
              <div class="list-group text-center">
                <div @click="isEditing()" class="list-group-item dropdown-item list-group-item-action selectable" data-bs-toggle="modal" data-bs-target="#routineForm">
                  <p class="mdi mdi-pencil">Edit Routine</p>
                </div>

                <div @click="removeRoutine()" class="list-group-item dropdown-item list-group-item-action text-danger selectable">
                  <p class="mdi mdi-trash-can">Delete Routine</p>
                </div>
              </div>
            </div>
          </div>
          <p class="col-12 text-break">{{ activeRoutine.description }}</p>
        </section>
      </div>

      <div v-if="activeRoutine.activities.length" class="col-12 d-flex overflow-auto p-0">
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
                    <h4 v-else>Sets:
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
                  <button v-else @click="updateActivity(act, 0), edit = ''" type="button" class="btn btn-action selectable no-select fs-6" data-bs-toggle="dropdown">Save</button>

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

      <div data-v-step="5"  v-else  class="bg-title mt-3">
        <h1  >Please Select Activities Below</h1>
      </div>
    </section>

    <section id="v-step-3"   class="row m-3 justify-content-center"  >
      <ActivitySearch   />
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

    async function getRoutineById(routineId) {
      try {
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
      account: computed(()=> AppState.account),
      wantsTour: computed(()=> AppState.wantsTour),
      points: computed(() => {
        let levels = 0
        AppState.activeRoutine.activities.forEach(a => levels += a.level)
        return AppState.activeRoutine.completeCount - levels
      }),
      steps: [
        {
          target: '#v-step-3',  // We're using document.querySelector() under the hood
          header: {
            title: 'Get Started'
          },
          content: `Add activities to your routine! `,
          params: {
            placement: 'bottom-end',
            enableScrolling: false
          }
        },
        {
          target: '.v-step-4',
          content: 'Level up your activities and increase their reps and point value!',
          params: {
            placement: 'top-start',
            enableScrolling: false
          }
        },
        {
          target: '[data-v-step="5"]',
          content: 'After you have activities in your routine press the play button to start the routine! Get levels and points upon completion!',
          params: {
            placement: 'bottom-end',
            enableScrolling: false
          }
        }
      ],
      callbacks: {
        onFinish: (() => {
          AppState.wantsTour = false
        }),
        onSkip: (() => AppState.wantsTour = false)
      },
      isEditing() {
        AppState.isEditing = true
      },

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