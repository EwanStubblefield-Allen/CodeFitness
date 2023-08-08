<template>
  <section v-if="!account.community && account.id" class="row justify-content-around bg-neutral-dark ">
    <h2 class="text-center mt-2">Select a Community</h2>
    <div @click="selectCommunity('Cardio Kings')"
      class="col-10 col-md-2 bg-neutral-light my-4 p-3 text-center selectable flag">
      <p class="fs-4 pt-3 fw-bold">Cardio Kings</p>
      <p class="pt-3 fw-5">Global Points: 0</p>
    </div>
    <div @click="selectCommunity('Weight Warriors')"
      class="col-10 col-md-2 bg-neutral-light my-4 p-3 text-center selectable flag">
      <p class="fs-4 pt-3 fw-bold">Weight Warriors</p>
      <p class="pt-3 fw-5">Global Points: 0</p>
    </div>
    <div @click="selectCommunity('Legion of Leisure')"
      class="col-10 col-md-2 bg-neutral-light my-4 p-3 text-center selectable flag">
      <p class="fs-4 pt-3 fw-bold">Legion of Leisure</p>
      <p class="pt-3 fw-5">Global Points: 0</p>
    </div>
  </section>

  <section v-else class="row justify-content-around bg-neutral-dark">
    <div :class="{ 'highlight1 order-2': account.community == 'Cardio Kings' }"
      class="col-10 col-md-3 bg-neutral-light my-4 p-3 text-center flag">
      <img class="w-75" src="../assets/img/flagCK.png" alt="Cardio Kings">
      <p class="fs-2 pt-3 fw-bold">Cardio Kings</p>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Cardio Kings'] }}</p>
    </div>
    <div
      :class="{ 'highlight2': account.community == 'Weight Warriors', 'order-3': account.community == 'Legion of Leisure' }"
      class="col-10 col-md-3 bg-neutral-light my-4 p-3 text-center flag">
      <img class="w-75" src="../assets/img/flagWW.png" alt="Cardio Kings">
      <p class="fs-2 pt-3 fw-bold">Weight Warriors</p>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Weight Warriors'] }}</p>
    </div>
    <div
      :class="{ 'highlight3': account.community == 'Legion of Leisure', 'order-3': account.community == 'Cardio Kings' }"
      class="col-10 col-md-3 bg-neutral-light my-4 p-3 text-center flag">
      <img class="w-75" src="../assets/img/flagLL.png" alt="Cardio Kings">
      <p class="fs-2 pt-3 fw-bold">Legion of Leisure</p>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Legion of Leisure'] }}</p>
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
  .flag {
    image-rendering: pixelated;
    color: var(--light);
    border: solid 4px var(--light);
    text-shadow: 0px 3px 7px black;
  }

  .flag img {
    filter: drop-shadow(0 10px 10px black);

  }

  .highlight1 {
    box-shadow:
      inset 0 0 50px #cfa6a6,
      inset 20px 0 80px rgb(255, 0, 0),
      inset -20px 0 300px rgb(255, 119, 0),
      inset 20px 0 300px rgb(255, 0, 0),
      inset -20px 0 300px rgb(255, 119, 0),
      0 0 50px #cfa6a6,
      -10px 0 80px rgb(255, 0, 0),
      10px 0 80px rgb(255, 119, 0);
    transform: scale(1.10);
  }

  .highlight2 {
    box-shadow:
      inset 0 0 50px #fff,
      inset 20px 0 80px #f0f,
      inset -20px 0 300px #0ff,
      inset 20px 0 300px #f0f,
      inset -20px 0 300px #0ff,
      0 0 50px #fff,
      -10px 0 80px #f0f,
      10px 0 80px #0ff;
    transform: scale(1.10);
  }

  .highlight3 {
    box-shadow:
      inset 0 0 50px #fff,
      inset 20px 0 80px rgb(255, 230, 0),
      inset -20px 0 300px rgb(231, 213, 109),
      inset 20px 0 300px rgb(255, 230, 0),
      inset -20px 0 300px rgb(231, 213, 109),
      0 0 50px #fff,
      -10px 0 80px rgb(255, 230, 0),
      10px 0 80px rgb(231, 213, 109);
    transform: scale(1.10);
  }
</style>