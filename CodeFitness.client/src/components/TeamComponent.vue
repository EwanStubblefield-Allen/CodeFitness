<template>
  <section v-if="!account.community && account.id" class="row justify-content-around bg-neutral-dark text-light">
    <h2 class="text-center mt-2">Select a Community</h2>
    <div @click="selectCommunity('Cardio Kings')"
      class="col-10 col-md-2 bg-neutral-light my-4 p-3 text-center selectable">
      <p class="fs-4 fw-bold">Cardio Kings</p>
      <p class="pt-3 fw-5">Global Points: 0</p>
    </div>
    <div @click="selectCommunity('Weight Warriors')"
      class="col-10 col-md-2 bg-neutral-light my-4 p-3 text-center selectable">
      <p class="fs-4 fw-bold">Weight Warriors</p>
      <p class="pt-3 fw-5">Global Points: 0</p>
    </div>
    <div @click="selectCommunity('Legion of Leisure')"
      class="col-10 col-md-2 bg-neutral-light my-4 p-3 text-center selectable">
      <p class="fs-4 fw-bold">Legion of Leisure</p>
      <p class="pt-3 fw-5">Global Points: 0</p>
    </div>
  </section>

  <section v-else class="row justify-content-around bg-neutral-dark text-light">
    <div class="col-10 col-md-3 bg-neutral-light my-4 p-3 text-center flag-img">
      <img class="w-75" src="../assets/img/flagCK.png" alt="Cardio Kings">
      <p class="fs-4 fw-bold">Cardio Kings</p>
      <p class="pt-3 fw-5">Global Points: {{ communities['Cardio Kings'] }}</p>
    </div>
    <div class="col-10 col-md-3 bg-neutral-light my-4 p-3 text-center flag-img">
      <img class="w-75" src="../assets/img/flagWW.png" alt="Cardio Kings">
      <p class="fs-4 fw-bold">Weight Warriors</p>
      <p class="pt-3 fw-5">Global Points: {{ communities['Weight Warriors'] }}</p>
    </div>
    <div class="col-10 col-md-3 bg-neutral-light my-4 p-3 text-center flag-img">
      <img class="w-75" src="../assets/img/flagLL.png" alt="Cardio Kings">
      <p class="fs-4 fw-bold">Legion of Leisure</p>
      <p class="pt-3 fw-5">Global Points: {{ communities['Legion of Leisure'] }}</p>
    </div>
  </section>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue'
import { accountService } from "../services/AccountService.js"
import { communitiesService } from '../services/CommunitiesService.js'
import Pop from "../utils/Pop.js"

export default {
  setup() {
    onMounted(() => {
      getCommunitiesPoints()
    })

    async function getCommunitiesPoints() {
      try {
        await communitiesService.getCommunitiesPoints()
      } catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY POINTS]')
      }
    }

    return {
      account: computed(() => AppState.account),
      communities: computed(() => AppState.communities),

      async selectCommunity(community) {
        try {
          await accountService.updateAccount({ community: community })
        } catch (error) {
          Pop.error(error.message, '[SELECTING COMMUNITY]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flag-img {
  image-rendering: pixelated;
}</style>