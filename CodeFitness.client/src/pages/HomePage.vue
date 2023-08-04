<template>
  <div class="col-10">
    <TeamComponent />

    <div v-if="account.id" class="row m-3">
      <button class="btn btn-action" type="button" data-bs-toggle="modal" data-bs-target="#routineForm">Create
        Routine</button>
    </div>
    <div class="row">
      <ActivitySearch />
    </div>
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