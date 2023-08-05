<template>
  <div class="col-9 mt-2 m-auto bg-dark" style="height: 60vh;">
    <div class="row  text-center justify-content-around">
      <div class="col-12" style="height: 5vh;"></div>
      <div class="col-2 bg-light">
        <section class="row">
          <div class="col-12 my-2">Biceps</div>
          <div class="col-12 my-2">Information</div>
          <div class="col-12 my-2">Reps</div>
        </section>
      </div>
      <div class="col-6 bg-light">
        <section class="row">
          <div class="col-12">Triceps</div>
          <div class="col-12 my-2">Information</div>
          <div class="col-12 my-2">Reps</div>
          <div class="col-12">Description
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sit!
            </p>
            <div class="col-12 d-flex justify-content-between">
              <button class="btn btn-primary">back</button>
              <button class="btn btn-primary">next</button>
            </div>
          </div>
        </section>
      </div>
      <div class="col-2 bg-light">
        <section class="row">

          <div class="div">Shoulder</div>
          <div class="col-12 my-2">Information</div>
          <div class="col-12 my-2">Reps</div>
        </section>
      </div>
    </div>
  </div>

  <div class="col-2 bg-neutral">

  </div>

  <div class="col-9 m-auto bg-primary" style="height: 40vh;">

    <section class="row">
      <div class="col-12 text-center text-white mt-4">Routine One</div>
    </section>

    <form action="">

      <section class="row my-4 justify-content-around">
        <div class="col-5 bg-light d-flex justify-content-between">Exercise one <input type="checkbox" name="" id=""> </div>
        <div class="col-5 bg-light d-flex justify-content-between"> Exercise one <input type="checkbox" name="" id=""></div>
      </section>

      <section class="row my-4 justify-content-around">
        <div class="col-5 bg-light d-flex justify-content-between">Exercise one <input type="checkbox" name="" id=""></div>
        <div class="col-5 bg-light d-flex justify-content-between"> Exercise one <input type="checkbox" name="" id=""></div>
      </section>

      <section class="row my-4 justify-content-around">
        <div class="col-5 bg-light d-flex justify-content-between">Exercise one <input type="checkbox" name="" id=""></div>
        <div class="col-5 bg-light d-flex justify-content-between"> Exercise one <input type="checkbox" name="" id=""></div>
      </section>

      <button>Stop</button>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { activitiesService } from "../services/ActivitiesService"
import Pop from "../utils/Pop"

export default {
  setup() {
    const editable = ref({})

    async function setRoutineActivities() {
      try {
        await activitiesService.setRoutineActivities()
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }
    onMounted(() => {
      setRoutineActivities()
    })
    return {
      activeRoutine: computed(() => AppState.activeRoutine),
      routineActivities: computed(() => AppState.routineActivities),
      editable

    }
  }
}
</script>

<style lang="scss" scoped></style>