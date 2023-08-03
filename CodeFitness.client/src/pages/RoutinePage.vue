<template>
  {{}}
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

    async function getRoutinesById() {
      try {
        const routineId = route.params.routineId
        await routinesService.getRoutinesById(routineId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }
    watchEffect(()=> {
      getRoutinesById(route.params.routineId)
    })
    return {
      routines: computed(()=> AppState.routines)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>