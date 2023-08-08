<template>
  <div class="d-flex justify-content-center">
    <p class="fs-5">Achievements</p>
  </div>
  <div v-for="achievement in achievements" :key="achievement.id">
    <div class="">
      <div v-for="tier in  achievement.achievementTier " :key="tier.id" class="card bg-primary m-2 elevation">
        <img :src="tier.picture" :alt="tier.name">
      </div>
    </div>
  </div>
</template>

<script>
// @ts-ignore
import { computed } from "vue"
// @ts-ignore
import { AppState } from "../AppState.js"

export default {
  setup() {
    return {
      achievements: computed(() => AppState.activeAchievements)

    }
  }
}
</script>

<style lang="scss" scoped></style>