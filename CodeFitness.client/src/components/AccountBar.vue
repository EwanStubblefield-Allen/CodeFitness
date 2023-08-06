<template>
  <section class="row justify-content-center">
    <div class="col-11 px-0 pb-3">
      <img class="community-img w-100" src="../assets/img/yellow-flag.png" alt="Yellow">
    </div>

    <div class="col-11 bg-light d-flex justify-content-center p-3 mb-3 bg-cover-img">
      <img class="account-picture " :src="account.picture" :alt="account.name" :title="account.name">
    </div>

    <div class="col-11 text-center text-dark bg-light fs-3 mb-3">
      <p class="text-break">Points: {{ account.points }}</p>

      <div class="mb-3">
        <p class="text-break">Routines:</p>
        <!-- <div v-for="routine in routines" :key="routine.id" class="bg-neutral-light mb-2 px-1">
          <RouterLink :to="{ name: 'Routines', params: { routineId: routine.id } }">
            {{ routine.title }}
          </RouterLink>
          <button class="fs-6" @click="deleteRoutine(routine)"><span class="mdi mdi-trash-can"></span></button>
        </div> -->

        <div v-if="routines.length > 3" class="list-group">
          <RouterLink :to="{ name: 'Routines', params: { routineId: routines[i - 1].id } }" v-for="i in 3" :key="routines[i - 1].id" class="list-group-item list-group-item-action list-group-item-info d-flex justify-content-between align-items-center text-break d-flex flex-column">
            {{ routines[i - 1].title }}
            <span class="badge bg-primary rounded-pill">{{ routines[i - 1].activities.length }}</span>
          </RouterLink>
        </div>

        <div v-else class="list-group">
          <RouterLink :to="{ name: 'Routines', params: { routineId: routine.id } }" v-for="routine in routines" :key="routine.id" class="list-group-item list-group-item-action list-group-item-info d-flex justify-content-between align-items-center text-break d-flex flex-column">
            {{ routine.title }}
            <span class="badge bg-primary rounded-pill">{{ routine.activities.length }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { routinesService } from "../services/RoutinesService.js"
import { useRouter } from "vue-router"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const router = useRouter()
    return {
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines),

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