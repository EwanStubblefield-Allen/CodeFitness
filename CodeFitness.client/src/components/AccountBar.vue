<template>
  <section v-if="account.id" class="row justify-content-center">
    <div class="col-11 px-0 py-1 community-banner">
      <img class="community-img w-100" :src="comIcon" alt="Yellow">
    </div>

    <div class="col-11 bg-light d-flex justify-content-center p-3 mb-1 bg-cover-img selectable" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAchievements" title="My Achievements">
      <img class="account-picture" :src="account.picture" :alt="account.name">
    </div>

    <div class="col-11 text-center text-dark bg-light fs-3 mb-1">
      <p class="text-break">Points: {{ account.points }}</p>

      <div class="mb-3">
        <button class="btn btn-action text-break" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRoutine">Routines</button>
      </div>
      <!-- <button class="btn btn-action my-1 text-break" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAchievements">Achievements</button> -->
    </div>
  </section>
  <section v-else class="row justify-content-center align-items-center bar-height">
    <div class="col-11 text-light">
      <p class="fs-5">Log in to Account Details</p>
    </div>
  </section>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, ref, watchEffect } from 'vue'

export default {
  setup() {
    const comIcon = ref(null)

    watchEffect(() => {
      switch (AppState.account.community) {
        case 'Cardio Kings':
          comIcon.value = 'src/assets/img/iconCK.png'
          break
        case 'Weight Warriors':
          comIcon.value = 'src/assets/img/iconWW.png'
          break
        case 'Legion of Leisure':
          comIcon.value = 'src/assets/img/iconLL.png'
          break

        default: comIcon.value = 'src/assets/img/yellow-flag.png'
          break
      }
    })

    return {
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines),
      backgroundImg: computed(() => `url(${AppState.account.coverImg})`),
      achievements: computed(() => AppState.activeAchievements),
      comIcon
    }
  }
}
</script>

<style lang="scss" scoped>
  .account-picture {
    height: 15vh;
    width: 15vh;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  .bg-cover-img {
    background-image: v-bind(backgroundImg);
    background-position: center;
    background-size: cover;
    border: 10px solid white;
  }

  .community-img {
    image-rendering: pixelated;
    background-color: var(--neutral-light);
    border: 10px solid white;
    padding: 2vh;
    object-fit: cover;
    object-position: center;
  }
</style>