<template>
  <div class="col-12 col-md-10 offset-md-2">
    <TeamComponent />

    <section v-if="account.community" class="row m-3">
      <button class="btn btn-action" type="button" data-bs-toggle="modal" data-bs-target="#routineForm">Create
        Routine</button>
    </section>
    <section class="row">
      <ActivitySearch />
    </section>
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