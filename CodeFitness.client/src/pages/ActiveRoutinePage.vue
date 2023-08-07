<template>
  <div class="bg-dark">

    <div class="col-9 m-auto bg-primary">

      <section class="row mt-4">
        <div class="col-12 text-center text-white mt-4">{{ activeRoutine.title }}</div>
      </section>

      <form @submit.prevent="" action="">
        <div class="row justify-content-around">

          <div v-for="a in routineActivities" :key="a.id" class="col-5 bg-light d-flex justify-content-between my-2">{{ a.name }} <input type="checkbox" name="" id="" :checked="a.checked === true"> </div>
        </div>

        <button @click="resetActivityChecked()">Restart</button>
      </form>
    </div>

    <div class="row text-center justify-content-around mt-4">
      <div class="col-2 bg-light">
        <section class="row">
          <div class="col-12 my-2">{{ routineActivities[current - 1]?.name }}</div>
          <div class="col-12 my-2">{{ routineActivities[current - 1]?.muscle }}</div>
          <div class="col-12 my-2">{{ routineActivities[current - 1]?.difficulty }}</div>
        </section>
      </div>
      <div class="col-6 bg-light">
        <section class="row">
          <div class="col-12 d-flex justify-content-between">
            <button :disabled="current == 0" @click="prevActivity(routineActivities[current - 1])" class="btn btn-primary">back</button>
            <button @click="nextActivity(routineActivities[current])" class="btn btn-primary">next</button>
          </div>
          <div class="col-12">{{ routineActivities[current]?.name }}</div>
          <div class="col-12 m-2">Equipment: {{ routineActivities[current]?.equipment }}</div>
          <div class="col-12 mb-2">Reps: 10 <span> Sets: 2</span></div>
          <div class="col-12 mb-2">Instructions: <p>{{ routineActivities[current]?.instructions }}</p>
          </div>

        </section>
      </div>
      <div class="col-2 bg-light">
        <section class="row">

          <div class="col-12 my-2">{{ routineActivities[current + 1]?.name }}</div>
          <div class="col-12 my-2">{{ routineActivities[current + 1]?.muscle }}</div>
          <div class="col-12 my-2">{{ routineActivities[current + 1]?.difficulty }}</div>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from "vue"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { activitiesService } from "../services/ActivitiesService"
import Pop from "../utils/Pop"

export default {
  setup() {
    const editable = ref({})
    let current = ref(0)

    async function setRoutineActivities() {
      try {
        await activitiesService.setRoutineActivities()
      } catch (error) {
        // Pop.error(error.message)
        // logger.log(error)
      }
    }
    // onMounted(()=>{
    //   // setRoutineActivities(),
    //   setCurrentActivity()
    // })
    watchEffect(() => {
      setRoutineActivities(AppState.activeRoutine?.activities)
    })
    return {
      activeRoutine: computed(() => AppState.activeRoutine),
      routineActivities: computed(() => AppState.routineActivities),
      currentActivity: computed(() => AppState.activeActivity),
      editable,
      current,
      toggleActivity(activity) {
        activity.checked = !activity.checked
      },

      nextActivity(activity) {
        current.value++
        this.toggleActivity(activity)

        if (current.value >= this.routineActivities.length) {
          current.value = 0
        }
      },
      prevActivity(activity) {
        if (current.value <= 0) {
          return
        }
        current.value--
        this.toggleActivity(activity)

        if (current.value < 0) {
          current.value = this.routineActivities.length - 1
        }
      },
      resetActivityChecked() {
        try {
          current.value = 0
          activitiesService.resetActivityChecked()
        } catch (error) {
          Pop.error(error.message)
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>