<template>
  <div v-for="act in activeRoutine.activities" :key="act.id" class="col-12 col-md-3 card text-center">
    {{ act.title }}
    <h1>{{ act.title }}</h1>
    {{ activeRoutine?.activities.level }}
    <h2>Activity Level</h2>
    {{ activeRoutine?.activities.sets }}
    <h2>Sets: 0</h2>
    {{ activeRoutine?.activities.reps }}
    <h2>Reps: 0</h2>
    {{ activeRoutine?.activities.equipment }}
    <h2>Equipment: </h2>
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