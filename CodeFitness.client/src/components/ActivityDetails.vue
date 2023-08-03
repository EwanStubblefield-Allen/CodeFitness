<template>
  <div>
    <img class="img-fluid" :src="activity.picture" :alt="activity.name">
    <div class="d-flex justify-content-around pt-2">
      <p>{{ activity.difficulty }}</p>
      <p>{{ activity.type }}</p>
      <p>{{ activity.equipment }}</p>
      <p>{{ activity.muscle }}</p>
    </div>
    <div class="py-3">
      <p class="fw-bold">Instructions:</p>
      <p class="px-2">{{ activity.instructions }}</p>
    </div>
    <div v-if="account.id" class="d-flex justify-content-end align-items-center pt-3">
      <p>Add to Routine</p>
      <button @click="addActivity()" class="mdi mdi-plus mx-2 btn btn-primary"></button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"

export default {
  setup() {
    return {
      activity: computed(() => AppState.activeActivity),
      account: computed(() => AppState.account),

      addActivity() {

      }
    }
  }
}
</script>

<style lang="scss" scoped></style>