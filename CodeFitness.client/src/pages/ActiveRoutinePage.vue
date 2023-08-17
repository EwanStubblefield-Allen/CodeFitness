<template>
  <div v-if="current == routine?.activities?.length" class="confetti-container">
    <div class="confetti">
      <i style="--speed: 10; --bg: yellow" class="mdi mdi-star-four-points text-success fs-4"></i>
      <i style="--speed: 29; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info fs-4"></i>
      <i style="--speed: 26;" class="mdi mdi-star text-warning fs-4"></i>
      <i style="--speed: 24;" class="text-warning mdi mdi-star fs-4"> </i>
      <i style="--speed: 5;" class="text-warning mdi mdi-star fs-4"></i>
      <i style="--speed: 40; --bg: white" class="fs-4 mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 17; --bg: green" class="fs-4 mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 25; --bg: white" class="fs-4 mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="fs-4 mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 15; --" class="fs-4 text-warning mdi mdi-star"> </i>
      <i style="--speed: 32; --" class="fs-4 text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 25; --bg: white" class="fs-4 mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="fs-4 mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: yellow" class="fs-4 mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 23;" class="text-warning fs-4 mdi mdi-star"></i>
      <i style="--speed: 37; --bg: red" class="mdi fs-4 mdi-asterisk text-primary"></i>
      <i style="--speed: 37;" class="text-warning mdi fs-4 mdi-star"></i>
      <i style="--speed: 36; --bg: white" class="mdi fs-4 mdi-hexagram text-secondary"></i>
      <i style="--speed: 32; -" class="text-warning mdi fs-4 mdi-star"></i>
      <i style="--speed: 32; --" class="text-danger mdi fs-4 mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 29; --bg: white" class="mdi fs-4 mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi fs-4 mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi fs-4 mdi-asterisk text-primary"></i>
      <i style="--speed: 23;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 30; --bg: pink" class="mdi fs-4 mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 30; --bg: red" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18;" class="text-danger mdi fs-4 mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 19; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 16; --bg: blue" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 23;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 34; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 39;" class="text-warning mdi mdi-star"></i>
      <i style="--speed: 40; --bg: purple" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 21; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 14; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 38; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 19; --bg: red" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 29;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 21; --bg: white" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 17; --" class="text-warning mdi mdi-star"></i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 23; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 48;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 38; --bg: pink" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 13;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 49; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 19;" class="text-warning mdi mdi-star"></i>
      <i style="--speed: 15; --bg: steelblue" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 10; --bg: yellow" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; -" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 29; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 17; --bg: blue" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 33;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 26; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 24;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 5; -" class="text-warning mdi mdi-star"></i>
      <i style="--speed: 40; --bg: purple" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 17; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 25; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 15;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 45; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 23;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 37;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 26; --bg: white" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 32;" class="text-warning mdi mdi-star"></i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 45; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 23;" class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 50; --bg: pink" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 30; --bg: red" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 19; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 16; --bg: blue" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 23;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 33; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 39; -" class="text-warning mdi mdi-star"></i>
      <i style="--speed: 40; --bg: orange" class="mdi mdi-star-four-points fs-4 text-success"></i>
      <i style="--speed: 21; --bg: green" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 14; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 38; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 19; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 29;" class="text-warning mdi mdi-star fs-4"> </i>
      <i style="--speed: 34; --bg: white" class="mdi mdi-hexagram text-secondary fs-4"></i>
      <i style="--speed: 17; --" class="text-warning mdi mdi-star fs-4"></i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave fs-4 mdi-rotate-130"></i>
      <i style="--speed: 23; --bg: white" class="mdi mdi-star-four-points fs-4 text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk fs-4 text-primary"></i>
      <i style="--speed: 48;" class="text-warning fs-4 mdi mdi-star"> </i>
      <i style="--speed: 38; --bg: pink" class="mdi fs-4 mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 13;" class="text-danger mdi fs-4 mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 49; --bg: yellow" class="mdi fs-4 mdi-asterisk text-primary"></i>
      <i style="--speed: 19; --" class="text-warning mdi mdi-star"></i>
      <i style="--speed: 15; --bg: cyan" class="mdi mdi-star-four-points text-success"></i>
    </div>
  </div>
  <div v-if="routine" class="col-12 col-md-10 offset-md-2 bg-dark">
    <section class="row justify-content-center bg-active-routine">
      <div class="col-12 p-3">
        <section class="row justify-content-center">
          <div class="col-12 col-lg-4 d-flex justify-content-center">
            <img class="img-fluid rounded img-size" :src="routine.picture" alt="">
          </div>
          <div class="col-12 col-lg-4 d-flex flex-lg-column align-items-center justify-content-center">
            <p class="fs-1 text-center text-white pe-3 pe-lg-0">{{ routine.title }}</p>
            <button @click="current = 0; editable = {}; completedSets = 0" class="btn btn-danger" type="reset">Restart</button>
          </div>
          <div class="col-12 col-lg-4 pb-3 pb-md-0 ">
            <Timer />
            <Tour v-if="wantsTour == true || account.needsTour == true" :steps="steps" :callbacks="callbacks" />

          </div>
        </section>
        <div>
          <div v-if="!superSet">
            <div class="text-center py-2">
              <button @click="superSet = true; current = 0; editable = {}" class="btn btn-action mb-2" title="-This will reset your current progress"> <i class="mdi mdi-rotate-3d-variant"></i> Regular
                Routine</button>
              <div>
                -Progress through the activity and all of its sets before going on to the next activity-
              </div>
            </div>
          </div>
          <div v-else>
            <div class="text-center pb-2">
              <button @click="superSet = false; current = 0; editable = {}" class="btn btn-action mb-2" title="-This will reset your current progress"> <i class="mdi mdi-rotate-3d-variant"></i> Super
                Set</button>
              <div>
                -Progress through a loop of every activity for the number of sets you it has-
              </div>
            </div>
          </div>
        </div>
        <section class="row justify-content-around text-center my-2">
          <!-- SECTION First activity card -->
          <div class="col-md-2 d-none d-md-block bg-light secondaryCard rounded elevation-5">
            <div v-if="current > 0" class="d-flex flex-column justify-content-around h-100">
              <p class="fs-5 fw-bold">{{ routine.activities[current - 1].name }}</p>
              <div class="d-flex justify-content-center fs-5">
                <p v-if="!superSet">
                  Sets:
                  <span class="text-neutral"> {{ routine.activities[current - 1].sets - completedSets }}</span>
                </p>
                <p class="ps-3">
                  Reps:
                  <span class="text-neutral"> {{ routine.activities[current - 1].reps }}</span>
                </p>
              </div>
              <div>
                <p>Equipment:</p>
                <p class="text-neutral">{{ routine.activities[current - 1].equipment }}</p>
              </div>
            </div>
            <div v-else class="pt-3 fs-md-5 fw-bold d-flex justify-content-start flex-column h-100">
              <div class="bg-success rounded text-dark">
                Start
              </div>
              Your routine has begun, press the > to advance through the steps of the routine
            </div>
          </div>
          <!-- SECTION < Prev button arrows > -->
          <a v-if="current != 0 || completedSets != 0" class="prevArrow col-1 d-none d-md-block" @click="changeActivity(-1)" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a v-else disabled class="prevArrow col-1 d-none d-md-block" role="button" data-slide="prev"></a>
          <!-- SECTION Main activity card -->
          <div class="col-md-6 col-12 bg-light p-3 activeCard rounded elevation-5">
            <div v-if="current < routine.activities.length">
              <div class="d-flex justify-content-between">
                <button @click="changeActivity(-1)" class="btn btn-action d-md-none d-block" :disabled="current == 0">Back</button>
                <button v-if="current == routine.activities.length" @click="updateData()" class="btn btn-action d-md-none d-block text-dark">Finish</button>
                <button v-else @click="changeActivity(1)" class="btn btn-action d-md-none d-block">Next</button>
              </div>
              <p class="fs-5 fw-bold p-2">{{ routine.activities[current].name }}</p>
              <div class="d-flex justify-content-center fs-5">
                <div v-if="routine.activities[current].sets != 0">
                  <p v-if="!superSet">
                    Sets:
                    <span class="text-neutral"> {{ routine.activities[current].sets - completedSets }} / {{
                      routine.activities[current].sets }}</span>
                  </p>
                  <p v-else>
                    Sets:
                    <span class="text-neutral">{{ routine.activities[current].iteration }} of {{
                      routine.activities[current].sets }}</span>
                  </p>
                </div>
                <p class="ps-3">
                  Reps:
                  <span class="text-neutral"> {{ routine.activities[current].reps }}</span>
                </p>
              </div>
              <p>
                Equipment:
                <span class="text-neutral"> {{ routine.activities[current].equipment }}</span>
              </p>
              <!-- SECTION Collapsable -->
              <button @click="toggleCollapse()" class="btn btn-outline-info" type="button">Show Instructions</button>
              <div v-if="showCollapse">
                <div class="card card-body">
                  <p class="p-2">Instructions:{{ routine.activities[current].instructions }}</p>
                </div>
              </div>
            </div>
            <div v-else class="d-flex justify-content-center">
              <button v-if="current == routine.activities.length" @click="updateData()" class="btn btn-action d-block selectable">Complete Routine</button>
            </div>
          </div>
          <!-- SECTION < Next button arrows > -->
          <a class="nextArrow col-1 d-none d-md-block v-step-8" v-if="current == routine.activities.length" role="button" data-slide="next"></a>

          <a class="nextArrow col-1 d-none d-md-block v-step-8" v-else @click="changeActivity(1)" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <!-- SECTION Next activity Card -->
          <div class="col-md-2 d-none d-md-block bg-light secondaryCard rounded elevation-5">
            <div v-if="current < routine.activities.length - 1" class="d-flex flex-column justify-content-around h-100">
              <p class="fs-5 fw-bold">{{ routine.activities[current + 1].name }}</p>
              <div class="d-flex justify-content-center fs-5">
                <p v-if="!superSet">
                  Sets:
                  <span class="text-neutral"> {{ routine.activities[current + 1].sets }}</span>
                </p>
                <p class="ps-3">
                  Reps:
                  <span class="text-neutral"> {{ routine.activities[current + 1].reps }}</span>
                </p>
              </div>
              <div>
                <p>Equipment:</p>
                <p class="text-neutral">{{ routine.activities[current + 1].equipment }}</p>
              </div>
            </div>
            <div v-else class="pt-3 fs-md-5 fw-bold d-flex justify-content-start flex-column h-100">
              <div class="bg-success rounded text-dark">
                Finish
              </div>
              Your routine is finished, Complete the Routine to earn points and level up your activities
            </div>
          </div>
        </section>

        <form @submit.prevent="" class="row justify-content-around ps-2">
          <section class="row justify-content-center">
            <div v-for="a in routine.activities" :key="a.tempId" class="col-2 col-md-1">
              <input onclick="return false" v-model="editable[a.tempId]" class="fs-5" type="checkbox" :id="a.tempId">
              <label class="d-flex flex-column align-items-center fs-5" :for="a.tempId">
                <i class="mdi mdi-weight fs-1" :title="a.name"></i>
              </label>
            </div>
          </section>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue"
import { useRoute, useRouter } from "vue-router"
import { AppState } from "../AppState"
import { accountService } from "../services/AccountService"
import { routinesService } from "../services/RoutinesService.js"
import Pop from "../utils/Pop"

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const editable = ref({})
    const showCollapse = ref(false)
    const completedSets = ref({})
    const superSet = ref({})
    const current = ref(0)

    watchEffect(() => {
      getRoutineById()
    })

    onMounted(() => {
      superSet.value = false
      completedSets.value = 0
    })

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
    })

    function toggleCollapse() {
      showCollapse.value = !showCollapse.value
    }

    async function getRoutineById() {
      try {
        await routinesService.getRoutineById(route.params.routineId)
      } catch (error) {
        Pop.error(error.message, '[GETTING ROUTINE BY ID]')
      }
    }

    return {
      editable,
      current,
      toggleCollapse,
      showCollapse,
      superSet,
      completedSets,
      wantsTour: computed(() => AppState.wantsTour),
      account: computed(() => AppState.account),
      steps: [
        {
          header: {
            title: 'Complete Routine Activities!'
          },
          target: '.v-step-8',
          content: ' Start by pressing the > Button. Make sure to hit the complete routine button at the end for your points and level!',
          params: {
            enableScrolling: true,
            placement: 'top-start'
          }
        }
      ],
      callbacks: {
        onFinish: (() => {
          AppState.wantsTour = false
          accountService.updateAccount({ needsTour: false })
        })
      },
      routine: computed(() => {
        const routine = AppState.activeRoutine
        const superRoutine = AppState.activeSuperRoutine

        if (!superSet.value || !AppState.account.id) {
          routine?.activities.forEach((a, index) => {
            a.tempId = index + 1
          })
          return routine
        } else if (AppState.activeRoutine) {
          let tempArr = [...AppState.activeRoutine.activities]
          superRoutine.activities.length = 0
          let temp = 0

          tempArr.forEach(a => {
            a.tempSets = a.sets
            temp += a.sets
          })

          let iteration = 1

          while (superRoutine.activities.length != temp) {
            tempArr.forEach(a => {
              if (a.tempSets > 0) {
                a.tempSets -= 1
                a.iteration = iteration
                superRoutine.activities.push({ ...a })
              }

              superRoutine.activities.forEach((a, index) => {
                a.tempId = index + 1
              })
            })
            iteration += 1
          }
          return superRoutine
        }
        return ''
      }),

      changeActivity(change) {
        if (!superSet.value) {
          if (change == 1) {
            completedSets.value += 1

            if (completedSets.value == this.routine.activities[current.value].sets) {
              editable.value[this.routine.activities[current.value].tempId] = true
              current.value += change
              completedSets.value = 0
            }
          } else {
            if (current.value != 0 && completedSets.value == 0) {
              editable.value[this.routine.activities[current.value - 1].tempId] = false
            }
            completedSets.value -= 1

            if (completedSets.value < 0) {
              current.value += change
              completedSets.value = this.routine.activities[current.value].sets - 1
            }
          }
        }
        else {
          if (change == 1) {
            editable.value[this.routine.activities[current.value].tempId] = true
          } else {
            if (current.value != 0) {
              editable.value[this.routine.activities[current.value - 1].tempId] = false
            }
          }
          current.value += change
        }
      },

      async updateData() {
        try {
          const isDone = await Pop.confirm('Finish Routine')

          if (!isDone) {
            return
          }
          current.value = 0
          let points = 0
          router.push({ name: 'Routines', params: { routineId: this.routine.id } })
          AppState.activeRoutine.activities.forEach(a => points += a.level + 1)
          await accountService.updateAccount({ points: AppState.account.points += points })
          await routinesService.updateRoutine({ completeCount: AppState.activeRoutine.completeCount += 1 })
          Pop.success(`You earned ${points} points and ${AppState.activeRoutine.title} has an available level!`)
        } catch (error) {
          Pop.error(error.message, '[UPDATING ACCOUNT POINTS]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-outline-info {
    border-color: #406B6E;
    color: #406B6E;
  }

  .activeCard {
    min-height: 40vh;
  }

  .img-size {
    height: 15vh;
    width: auto;
    object-fit: cover;
    object-position: center;
  }

  .shadowed-text {
    text-shadow: 1px 1px 2px black;
  }

  .bg-active-routine {
    background-image: linear-gradient(var(--darkest), var(--neutral-dark));
    min-height: 91.3vh;
  }

  .secondaryCard {
    min-height: 40vh;
    max-height: 40vh;
    transform: scale(.90);
  }

  input {
    display: none;
  }

  label>i {
    color: var(--darkest);
  }

  input[type=checkbox]:checked+label>i {
    color: var(--action);
  }

  .confetti-container {
    user-select: none;
    pointer-events: none;
    z-index: 10;
  }

  .confetti {
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
  }

  .confetti .square {
    width: 3rem;
    height: 1rem;
    background-color: orange;
    transform: rotate(140deg);

    .confetti .rectangle {
      width: 1rem;
      height: 0.5rem;
      background-color: red;
    }
  }

  .confetti i {
    width: 3rem;
    height: 3rem;
    margin: 0 0.2rem;
    animation-name: confetti;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: calc(60s / var(--speed));
  }

  .confetti i:nth-child(even) {
    transform: rotate(90deg);
  }

  @keyframes confetti {
    0% {
      transform: translateY(-100vh);
    }

    100% {
      transform: translateY(100vh);
    }
  }
</style>