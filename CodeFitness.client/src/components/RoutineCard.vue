<template>
  <div class="routine-bg rounded">
    <div class="reserved-space"></div>
    <div class="routine-details p-2">
      <h5 class=""> {{ routineProp.title }}</h5>
      <p class="">{{ routineProp.description }}</p>
      <img class="account-picture" :src="routineProp.picture" :alt="routineProp.name">
      <div class="text-end">
        <!-- <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: routineProp.id } }">
          <button @click="getRoutineById(routineProp.id)" class="btn btn-action" type="button">Start Routine</button>
        </RouterLink> -->
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import { routinesService } from "../services/RoutinesService"
import Pop from "../utils/Pop.js"


export default {
  props: {
    routineProp: {
      type: Object,
      required: true
    }
  },

  setup(props){
    return {
      routine: computed(() => AppState.routines),
      
      async getRoutineById() {
        try {
          const routineIdProp =
          await routinesService.getRoutineById(props.routineIdProp)
        } catch (error) {
          Pop.error(error.message, '[GETTING ROUTINE BY ID]')
        }
      },

    }
  }
}
</script>


<style lang="scss" scoped>

.routine-bg {
      background-image: v-bind(picture);
  }


</style>