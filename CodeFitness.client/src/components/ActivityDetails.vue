<template>
  <div>
    <img class="img-fluid" :src="activity.picture" :alt="activity.name">
    <div class="d-flex justify-content-around pt-2">
      <p>{{ activity.difficulty }}</p>
      <p>{{ activity.type }}</p>
      <p>{{ activity.equipment }}</p>
      <p>{{ activity.muscle }}</p>
    </div>
    <p class="py-3 fw-bold">Instructions</p>
    <p class="">{{ activity.instructions }}</p>
    <div class="d-flex align-items-center" v-if="!account.id">
      <p>Add to Routine</p>
      <button @click="addActivity" class="mdi mdi-plus-box mx-2 btn btn-primary"></button>
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
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped></style>