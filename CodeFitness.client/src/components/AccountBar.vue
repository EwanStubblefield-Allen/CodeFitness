<template>
  <section v-if="account.id" class="row justify-content-center bar-height">
    <div class="col-11 px-0 pb-1">
      <img class="community-img w-100" :src="comIcon" alt="Yellow">
    </div>

    <div class="col-11 bg-light d-flex justify-content-center p-3 mb-1 bg-cover-img">
      <img class="account-picture " :src="account.picture" :alt="account.name" :title="account.name">
    </div>

    <div class="col-11 text-center text-dark bg-light fs-3 mb-1">
      <p class="text-break">Points: {{ account.points }}</p>

      <div class="mb-3">
        <button class="btn btn-action text-break" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRoutine">Routines</button>
      </div>
    </div>

    <div class="col-11">
      <button class="btn btn-action mt-1" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasAchievements">Achievements</button>
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
import { computed, onMounted, ref, watchEffect } from 'vue'
import { routinesService } from "../services/RoutinesService.js"
import { useRouter } from "vue-router"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const router = useRouter()
    const comIcon = ref (null)
    
    
    watchEffect(() => {
      switch (AppState.account.community) {
      case 'Cardio Kings':
        comIcon.value = 'src/assets/img/iconCK.png'
        break;
      case 'Weight Warriors':
        comIcon.value = 'src/assets/img/iconWW.png'
        break;
      case 'Legion of Leisure':
        comIcon.value = 'src/assets/img/iconLL.png'
        break;

      default: comIcon.value = 'src/assets/img/yellow-flag.png'
        break;
      }
    })

    return {
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines),
      backgroundImg: computed(() => `url(${AppState.account.coverImg})`),
      achievements: computed(() => AppState.activeAchievements),
      comIcon,

      async deleteRoutine(routine) {
        try {
          const wantsToRemove = await Pop.confirm(`Are you sure you want to delete ${routine.title}`)

          if (!wantsToRemove) {
            return
          }
          const routineToRemove = AppState.routines.find(r => r.accountId == AppState.account.id)
          const routineId = routineToRemove.id
          await routinesService.deleteRoutine(routineId)
          router.push('/')
        } catch (error) {
          Pop.error(error.message)
        }
      }
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