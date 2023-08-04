<template>
  <section class="row justify-content-center">
    <div class="col-11 px-0 pb-3">
      <img class="community-img w-100" src="../assets/img/yellow-flag.png" alt="Yellow">
    </div>

    <div class="col-11 bg-light d-flex justify-content-center p-3 mb-3 bg-cover-img">
      <img class="account-picture " :src="account.picture" :alt="account.name" :title="account.name">
    </div>

    <div class="col-11 text-center text-dark bg-light fs-3 mb-3">
      <div class="mb-3">
        <p>Points: {{ account.points }}</p>
      </div>

      <p class="mb-3">Routines:</p>
      <div v-for="routine in routines" :key="routine.id" class="bg-neutral-light mb-2 px-1">
        <RouterLink :to="{ name: 'Routines', params: { routineId: routine.id } }">
          {{ routine.title }}
          <!-- <button class="fs-6" @click="deleteRoutine()"><span class="mdi mdi-trash-can"></span></button> -->
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { routinesService } from "../services/RoutinesService.js"
import Pop from "../utils/Pop.js"
import { useRoute } from "vue-router"

export default {
  setup() {
    const route = useRoute()
    return {
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines),

      setActiveRoutine(routine) {
        routinesService.setActiveRoutine(routine)
      }

      // async deleteRoutine() {
      //   try {
      //     const wantsToRemove = await Pop.confirm()

      //     if (!wantsToRemove) {
      //       return
      //     }

      //     const routineToRemove = AppState.routines.find(r => r.accountId == AppState.account.id)
      //     const routineId = routineToRemove.id
      //     await routinesService.deleteRoutine(routineId)
      //   } catch (error) {
      //     Pop.error(error.message)
      //   }
      // }
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
    background-image: url('https://plus.unsplash.com/premium_photo-1687672031143-9d430c8e7d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
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