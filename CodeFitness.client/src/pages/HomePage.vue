<template>
  <div class="row justify-content-around bg-neutral-dark text-light m-3">
    <TeamComponent />
  </div>
  <div v-if="account.id" class="row m-3">
    <button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#routineForm">Create
      Routine</button>
  </div>
  <div class="row m-3">
    <ActivitySearch />
  </div>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import ActivitySearch from '../components/ActivitySearch.vue'
import TeamComponent from '../components/TeamComponent.vue'

export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  },
  components: { TeamComponent, ActivitySearch }
}
</script>

<style scoped lang="scss"></style>