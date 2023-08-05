<template>
  <div class="col-12 col-md-10 bg-dark">
<div class="row text-center justify-content-around mt-4">
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
      <div class="col-12">Description<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sit!</p></div>
        <div class="col-12 d-flex justify-content-between">
          <button class="btn btn-primary">back</button>
          <button class="btn btn-primary">next</button>
        </div>
    </section>
  </div>
  <div class="col-2 bg-light">
    <section class="row">

      <div class="col-12 my-2">Shoulder</div>
      <div class="col-12 my-2">Information</div>
      <div class="col-12 my-2">Reps</div>
    </section>
  </div>
</div>

  <div class="col-9 m-auto bg-primary">

    <section class="row mt-4">
<div class="col-12 text-center text-white mt-4">Routine One</div>
    </section>

    <form action="">
      <div class="row justify-content-around">

        <div v-for="i in 6" :key="i.id" class="col-5 bg-light d-flex justify-content-between my-2">Exercise one <input type="checkbox" name="" id=""> </div>
      </div>

      <!-- <section class="row my-4 justify-content-around">
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
      </section> -->

      <button>Stop</button>
    </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { activitiesService } from "../services/ActivitiesService"

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

    async function setCurrentActivity() {
      try {
        await activitiesService.setCurrentActivity()
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }
    onMounted(()=>{
      setRoutineActivities(),
      setCurrentActivity()
    })
    return {
      activeRoutine: computed(()=> AppState.activeRoutine),
      routineActivities: computed(()=> AppState.routineActivities),
      currentActivity: computed(()=> AppState.activeActivity),
      editable

    }
  }
}
</script>

<style lang="scss" scoped>

</style>