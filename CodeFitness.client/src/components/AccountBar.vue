<template>
  <section v-if="account.id" class="row justify-content-center">
    <RouterLink :to="{ name: 'Account' }" class="col-11 bg-light d-flex justify-content-center p-3 my-1 bg-cover-img">
      <img class="account-picture" :src="account.picture" :alt="account.name">
    </RouterLink>

    <div class="col-11 px-0 py-1 community-banner">
      <div v-if="!comIcon == ''">
        <img class="community-img w-100" :src="comIcon" alt="Yellow">
      </div>
    </div>

    <div class="col-11 text-center text-dark bg-light fs-3 mb-1">
      <p class="text-break">Points: {{ account.points }}</p>

      <div v-if="account.community" class="d-flex flex-column mb-3">
        <button v-if="routines.length" class="btn btn-action text-break" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRoutine">Routines</button>
        <button v-else class="btn btn-action text-break" data-bs-toggle="modal"
          data-bs-target="#routineForm">Routines</button>
        <button class="btn btn-action mt-1 text-break" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasAchievements">Badges</button>
      </div>
    </div>
  </section>
  <section v-else class="row justify-content-center pt-5 bar-height">
    <div class="col-12 text-light">
      <p class="fs-2 text-center">Welcome to <strong>codeFitness</strong></p>
      <p class="fs-1 mdi mdi-dots-horizontal text-center"></p>
      <p class="fs-6">Participate in the struggle for the highest points between the three different teams.
      </p>
      <br>
      <p>Login first to join the ranks of your favorite team</p>

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
      if (AppState.account.id) {
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

          default: comIcon.value = null
            break
        }
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
.bar-height {
  height: 87vh;
}

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
}
</style>