<template>
  <div class="d-flex justify-content-center">
    <p class="fs-5 text-break">Achievements</p>
  </div>
  <div class="fs-6">
    <p>Completed <span>{{ completed }}</span> out of 16</p>
  </div>
  <div v-for="achievement in achievements" :key="achievement.id">

    <div v-for="tier in achievement.achievementTier" :key="tier.id">
      <div v-if="achievement.tier >= tier.tier" class="card bg-neutral-light m-2 elevation border-light">
        <!-- <div>
          <p>{{ tier.description }}</p>
        </div> -->
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
      achievements: computed(() => AppState.activeAchievements),
      completed: computed(() => {
        let complete = 0
        AppState.activeAchievements.forEach(a => {
          complete += a.tier
        })
        return complete
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>