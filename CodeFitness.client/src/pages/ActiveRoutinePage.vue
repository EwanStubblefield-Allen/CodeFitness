<template>
  <div v-if="current == routine?.activities.length" class="confetti-container ">
    <div class="confetti">
      <i style="--speed: 10; --bg: yellow" class="mdi mdi-star-four-points text-success fs-4"></i>
      <i style="--speed: 29; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info fs-4"></i>
      <i style="--speed: 26;" class="mdi mdi-star text-warning fs-4"></i>
      <i style="--speed: 24;  " class="text-warning mdi mdi-star fs-4"> </i>
      <i style="--speed: 5;  " class="text-warning mdi mdi-star fs-4"></i>
      <i style="--speed: 40; --bg: white" class="fs-4 mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 17; --bg: green" class="fs-4 mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 25; --bg: white" class="fs-4 mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="fs-4 mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 15; -- " class="fs-4 text-warning mdi mdi-star"> </i>
      <i style="--speed: 32; --" class="fs-4 text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 25; --bg: white" class="fs-4 mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="fs-4 mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: yellow" class="fs-4 mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 23;  " class="text-warning fs-4 mdi mdi-star"></i>
      <i style="--speed: 37; --bg: red" class="mdi fs-4 mdi-asterisk text-primary"></i>
      <i style="--speed: 37;  " class="text-warning mdi fs-4 mdi-star"></i>
      <i style="--speed: 36; --bg: white" class="mdi fs-4 mdi-hexagram text-secondary"></i>
      <i style="--speed: 32; - " class="text-warning mdi fs-4 mdi-star"></i>
      <i style="--speed: 32; --" class="text-danger mdi fs-4 mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 29; --bg: white" class="mdi fs-4 mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi fs-4 mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi fs-4 mdi-asterisk text-primary"></i>
      <i style="--speed: 23;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 30; --bg: pink" class="mdi fs-4 mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 30; --bg: red" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18;" class="text-danger mdi fs-4 mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 19; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 16; --bg: blue" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 23;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 34; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 39;  " class="text-warning mdi mdi-star"></i>
      <i style="--speed: 40; --bg: purple" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 21; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 14; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 38; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 19; --bg: red" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 29;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 21; --bg: white" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 17; -- " class="text-warning mdi mdi-star"></i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 23; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 48;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 38; --bg: pink" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 13;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 49; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 19;  " class="text-warning mdi mdi-star"></i>
      <i style="--speed: 15; --bg: steelblue" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 10; --bg: yellow" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; -" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 29; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 17; --bg: blue" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 33;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 26; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 24;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 5; - " class="text-warning mdi mdi-star"></i>
      <i style="--speed: 40; --bg: purple" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 17; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 25; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 15;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 45; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 23;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 37;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 26; --bg: white" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 32;  " class="text-warning mdi mdi-star"></i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 45; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 23;  " class="text-warning mdi mdi-star"> </i>
      <i style="--speed: 50; --bg: pink" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 30; --bg: red" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 18;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 19; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 16; --bg: blue" class="mdi mdi-hexagram text-secondary"></i>
      <i style="--speed: 23;" class="text-danger mdi mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 33; --bg: yellow" class="mdi mdi-asterisk text-primary"></i>
      <i style="--speed: 39; - " class="text-warning mdi mdi-star"></i>
      <i style="--speed: 40; --bg: orange" class="mdi mdi-star-four-points fs-4 text-success"></i>
      <i style="--speed: 21; --bg: green" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 14; --bg: white" class="mdi mdi-star-four-points text-success"></i>
      <i style="--speed: 38; --bg: green" class="mdi mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 19; --bg: red" class="mdi mdi-asterisk text-primary fs-4"></i>
      <i style="--speed: 29;  " class="text-warning mdi mdi-star fs-4"> </i>
      <i style="--speed: 34; --bg: white" class="mdi mdi-hexagram text-secondary fs-4"></i>
      <i style="--speed: 17; -- " class="text-warning mdi mdi-star fs-4"></i>
      <i style="--speed: 32; --" class="text-danger mdi mdi-sine-wave fs-4 mdi-rotate-130"></i>
      <i style="--speed: 23; --bg: white" class="mdi mdi-star-four-points fs-4 text-success"></i>
      <i style="--speed: 18; --bg: green" class="mdi mdi-chart-line-variant fs-4 mdi-rotate-80 text-info"></i>
      <i style="--speed: 37; --bg: red" class="mdi mdi-asterisk fs-4 text-primary"></i>
      <i style="--speed: 48;  " class="text-warning fs-4 mdi mdi-star"> </i>
      <i style="--speed: 38; --bg: pink" class="mdi fs-4 mdi-chart-line-variant mdi-rotate-80 text-info"></i>
      <i style="--speed: 13;" class="text-danger mdi fs-4 mdi-sine-wave mdi-rotate-130"></i>
      <i style="--speed: 49; --bg: yellow" class="mdi fs-4 mdi-asterisk text-primary"></i>
      <i style="--speed: 19; -- " class="text-warning mdi mdi-star"></i>
      <i style="--speed: 15; --bg: cyan" class="mdi mdi-star-four-points text-success"></i>
    </div>
  </div>
  <div v-if="routine" class="col-12 col-md-10 offset-md-2 bg-dark ">
    <section class="row justify-content-center bg-neutral-dark">
      <div class="col-12 p-3">

        <h1 class="fs-1 text-center text-white">{{ routine.title }}</h1>

        <section class="row justify-content-around text-center my-4">
          <!-- First activity card -->
          <div class="col-md-2 d-none d-md-block bg-light secondaryCard rounded elevation-5">
            <div v-if="current > 0" class="d-flex flex-column justify-content-around h-100">
              <p class="fs-5 fw-bold">{{ routine.activities[current - 1].name }}</p>
              <div class="d-flex justify-content-center fs-5">
                <p>Sets: <span class="text-neutral">{{ routine.activities[current - 1].sets - completedSets }}</span></p>
                <p class="ps-3">Reps: <span class="text-neutral">{{ routine.activities[current - 1].reps }}</span></p>
              </div>
              <p class="text-neutral-light">{{ routine.activities[current - 1].equipment }}</p>

            </div>
            <div v-else>
              <div class="bg-success rounded text-light">
                Start
              </div>
              Your routine has begun, press the > to advance throught the steps of the routine
            </div>
          </div>
          <!-- Main activity card -->
          <div class="col-md-6 col-12 bg-light p-3 activeCard rounded elevation-5">
            <div v-if="current < routine.activities.length">
              <div class="d-flex justify-content-between">
                <button @click="changeActivity(-1)" class="btn btn-action d-md-none d-block"
                  :disabled="current == 0">Back</button>
                <button v-if="current == routine.activities.length" @click="updateData()"
                  class="btn btn-action d-md-none d-block">Finish</button>
                <button v-else @click="changeActivity(1)" class="btn btn-action d-md-none d-block">Next</button>
              </div>
              <p class="fs-5 fw-bold p-2">{{ routine.activities[current].name }}</p>
              <div class="d-flex justify-content-center fs-5">
                <p>Sets: <span class="text-neutral">{{ routine.activities[current].sets - completedSets }}</span></p>
                <p class="ps-3">Reps: <span class="text-neutral">{{ routine.activities[current].reps }}</span></p>
              </div>
              <p class="">Equipment: <span class="text-neutral-light"> {{ routine.activities[current].equipment }}</span>
              </p>
              <!-- Collapsable -->
              <p><button @click="toggleCollapse()" class="btn btn-outline-info" type="button">Show Instructions</button>
              </p>
              <div class="" v-if="showCollapse">
                <div class="card card-body">
                  <p class="p-2">Instructions:{{ routine.activities[current].instructions }}</p>
                </div>
              </div>
            </div>
            <div v-else class="d-flex justify-content-center">
              <button v-if="current == routine.activities.length" @click="updateData()"
                class="btn btn-action d-block selectable">Complete Routine</button>
            </div>
            <div v-if="current == routine.activities.length" class="">
              <!-- <a class="bg-success rounded text-light fs-1 selectable" @click="updateData()">
                Complete Routine
              </a> -->
              <!-- <i class="mdi mdi-axe mdi-spin"></i>
              <i class="mdi mdi-axe mdi-spin"></i>
              <i class="mdi mdi-axe mdi-spin"></i> -->
            </div>
            <!-- < Next Prev button arrows > -->
            <a v-if="current != 0" class="prevArrow d-none d-md-block" @click="changeActivity(-1)" role="button"
              data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
            <a class="nextArrow d-none d-md-block" v-if="current == routine.activities.length" role="button"
              data-slide="next">
              <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span> -->
            </a>
            <a class="nextArrow d-none d-md-block" v-else @click="changeActivity(1)" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>
          <!-- Next activity Card -->
          <div class="col-md-2 d-none d-md-block bg-light secondaryCard rounded elevation-5">
            <div v-if="current < routine.activities.length - 1" class="d-flex flex-column justify-content-around h-100">
              <p class="fs-5 fw-bold">{{ routine.activities[current + 1].name }}</p>
              <div class="d-flex justify-content-center fs-5">
                <p>Sets: <span class="text-neutral">{{ routine.activities[current + 1].sets }}</span></p>
                <p class="ps-3">Reps: <span class="text-neutral">{{ routine.activities[current + 1].reps }}</span></p>
              </div>
              <p class="text-neutral-light">{{ routine.activities[current + 1].equipment }}</p>

            </div>
            <div v-else class="pt-3 fs-5 fw-bold d-flex justify-content-around flex-column h-100">
              <!-- <p class=" "><i class="mdi mdi-party-popper mdi-rotate-270 text-warning"></i> Done!<i
                  class="mdi mdi-party-popper text-warning"></i></p>
              <p>🎈🎊🥳🎊🎈</p>
              <p>🎉🎊🎁🎊🎉</p> -->

              <div class="bg-success rounded text-light">
                Finish
              </div>
            </div>
          </div>
        </section>
        <section class="row">
          <div class="col-12 d-flex justify-content-end">
            <button class="btn btn-action" title="No Functionality yet">Timer</button>
          </div>
        </section>
        <form @submit.prevent="" class="row justify-content-around ps-2">
          <section class="row">
            <div class="col-12 d-flex mb-3 justify-content-center">
              <div v-if="!superSet">
                <button @click="superSet = true; current = 0; editable = {}" class="btn btn-action "
                  title=" -This will reset your current progress"> <i class="mdi mdi-rotate-3d-variant "></i> Super
                  Set</button>
              </div>
              <div v-else>
                <button @click="superSet = false; current = 0; editable = {}" class="btn btn-action"
                  title=" -This will reset your current progress"> <i class="mdi mdi-rotate-3d-variant "></i> Regular
                  Routine</button>
              </div>
            </div>
          </section>
          <div v-for="a in routine.activities" :key="a.id" class="col-5 form-check ">
            <input onclick="return false" v-model="editable[a.id]" class="fs-5 form-check-input" type="checkbox"
              :id="a.id">
            <label class="fs-5 form-check-label" :for="a.id">
              {{ a.name }}
            </label>
          </div>
          <div class="text-end p-3">
            <button @click="current = 0; editable = {}; completedSets = 0" class="btn btn-danger"
              type="reset">Restart</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from "vue"
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

    let current = ref(0)

    watchEffect(() => {
      getRoutineById()
    })
    onMounted(() => {
      superSet.value = false
      completedSets.value = 0
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
      superSet,
      completedSets,
      routine: computed(() => AppState.activeRoutine),
      toggleCollapse,
      showCollapse,
      toggleActivity(activity) {
        activity.checked = !activity.checked
      },

      changeActivity(change) {
        if (change == 1) {
          editable.value[this.routine.activities[current.value].id] = true
          completedSets.value += 1
        } else {
          editable.value[this.routine.activities[current.value - 1].id] = false
          completedSets.value -= 1
        }

        if (completedSets.value == this.routine.activities[current.value].sets) {
          current.value += change
          completedSets.value = 0
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

.secondaryCard {
  min-height: 40vh;
  max-height: 40vh;
  transform: scale(.90);
}

.parentContainer {
  position: absolute;
}

.nextArrow {
  position: absolute;
  bottom: 70%;
  left: 80%;
}

.prevArrow {
  position: absolute;
  bottom: 70%;
  right: 63%;
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