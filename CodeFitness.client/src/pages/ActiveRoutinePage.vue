<template>
    <div class="col-2">
      biceps
    </div>
    <div class="col-6">Triceps</div>
    <div class="col-2">Shoulder</div>

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