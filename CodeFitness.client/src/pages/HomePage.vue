<template>
  <div class="row justify-content-around bg-neutral-dark text-light m-3">
    <TeamComponent />
  </div>
  <div class="row m-3">
    <button class="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#routineForm">Create
      Routine</button>
  </div>
  <div class="row m-3">
    <ActivitySearch />
  </div>
</template>

<script>
import ActivitySearch from '../components/ActivitySearch.vue'
import TeamComponent from '../components/TeamComponent.vue'

export default {
  setup() {
    return {}
  },
  components: { TeamComponent, ActivitySearch }
}
</script>

<style scoped lang="scss"></style>