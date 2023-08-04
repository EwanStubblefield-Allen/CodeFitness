<template>
  <div class="col-9 mt-5 mx-auto">

    <div class="text-center bg-neutral-dark text-light p-3">
      <h1>{{ activeRoutine?.title }}</h1>
      <div v-if="activeRoutine?.activities[0]">
      <div v-for="act in activeRoutine.activities" :key="act.id" class="col-12 col-md-3 card text-center m-5 p-4 fw-bold elevation-5 selectable ">
        <h2>{{ act.name }}</h2>
        <h3 class="p-3">Level: {{ act.level }}</h3>
        <div class="d-flex justify-content-between p-2">
          <h4>Sets: 0{{ act.sets }}</h4>
          <h4>Reps: 0{{ act.reps }}</h4>
        </div>
        <div v-if="act.equipment" class="text-start pt-4">
          <h4>Equipment: </h4>
          <ul>
            <li>
              <h4>
                {{ act.equipment }}
              </h4>
            </li>
          </ul>
          <div class="text-end">
            <button class="fs-6 bg-danger border no-border rounded" @click="deleteActivity()"><span class="mdi mdi-trash-can"></span></button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else>
      <h1>Please Select Activities Below</h1>
    </div>
    
  </div>
  
  
  <!-- {{ activeRoutine }} -->
  <div class="row m-3">
    <ActivitySearch />
  </div>
</div>
</template>

<script>
import { computed, watchEffect } from "vue"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { routinesService } from "../services/RoutinesService"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger.js"

export default {
  setup() {
    const route = useRoute()

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
      activeRoutine: computed(() => AppState.activeRoutine)

    }
  }
}
</script>

<style lang="scss" scoped></style>