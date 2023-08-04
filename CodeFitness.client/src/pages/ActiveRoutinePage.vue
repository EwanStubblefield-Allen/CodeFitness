<template>
  <div class="col-10 bg-dark">
<div class="row  text-center justify-content-between">
<div class="col-12" style="height: 5vh;"></div>
  <div class="col-2 bg-light">
    biceps
  </div>
  <div class="col-6 bg-light">
    <div class="row">

    </div>Triceps</div>
  <div class="col-2 bg-light">Shoulder</div>
</div>
  </div>

</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState"

export default {
  setup() {
    return {
      activeRoutine: computed(()=> AppState.activeRoutine)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>