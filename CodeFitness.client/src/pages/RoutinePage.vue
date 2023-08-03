<template>
  {{activeRoutines}}
  <div class="row m-3">
    <ActivitySearch />
  </div>
</template>

<script>
import { computed, watchEffect } from "vue"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { routinesService } from "../services/RoutinesService"

export default {
  setup() {
    const route = useRoute()

    async function getRoutineById() {
      try {
        const routineId = route.params.routineId
        await routinesService.getRoutineById(routineId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }
    watchEffect(()=> {
      getRoutineById(route.params.routineId)
    })
    return {
      routines: computed(()=> AppState.routines),
      activeRoutines: computed(()=> AppState.activeRoutines)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>