<template>
  <section class="row d-flex justify-content-center">
    <p class="fs-5 text-break">Badges</p>
  </section>
  <section class="row fs-6">
    <p>Completed <span>{{ completed }}</span> out of 16</p>
  </section>
  <section class="row" v-for="achievement in achievements" :key="achievement.id">
    <div>
      {{ achievement.type }}
    </div>
    <div class="col-6" v-for="tier in achievement.achievementTier" :key="tier.id">
      <div v-if="achievement.tier >= tier.tier" class="card achievement-card mb-3 elevation border-light">
        <img class="unlocked" :src="tier.picture" :alt="tier.name" :title="tier.name">
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from "vue"
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

<style lang="scss" scoped>
.achievement-card {
  background-image: linear-gradient(var(--darkest), var(--neutral-dark));
}

.unlocked {
  padding: 1vh;
  filter: drop-shadow(3px 3px var(--darkest)) drop-shadow(-3px -3px var(--neutral-dark));
}
</style>