<template>
  <div class="col-10">
    {{ activeRoutine }}
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