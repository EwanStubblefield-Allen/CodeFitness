<template>
  <section v-if="!account.community && account.id" class="row justify-content-around bg-neutral-dark">
    <h1 class="text-center text-light my-3">Select a Community to Earn Points</h1>
    <div @click="selectCommunity('Cardio Kings')" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center selectable flag highlight1 scalable">
      <div>
        <img class="w-75" src="../assets/img/flagCK.png" alt="Cardio Kings">
        <p class="fs-5 fs-md-2 pt-3 fw-bold">Cardio Kings</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Cardio Kings'] }}</p>
    </div>
    <div @click="selectCommunity('Weight Warriors')" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center selectable flag highlight2 scalable">
      <div>
        <img class="w-75" src="../assets/img/flagWW.png" alt="Cardio Kings">
        <p class="fs-5 fs-md-2 pt-3 fw-bold">Weight Warriors</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Weight Warriors'] }}</p>
    </div>
    <div @click="selectCommunity('Legion of Leisure')" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center selectable flag highlight3 scalable">
      <div>
        <img class="w-75" src="../assets/img/flagLL.png" alt="Cardio Kings">
        <p class="fs-5 fs-md-2 pt-3 fw-bold">Legion of Leisure</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Legion of Leisure'] }}</p>
    </div>
  </section>

  <section v-else class="row justify-content-around bg-neutral-dark">
    <div :class="{ 'highlight1 order-2': account.community == 'Cardio Kings' }" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center flag">
      <div>
        <img class="w-75" src="../assets/img/flagCK.png" alt="Cardio Kings">
        <p class="fs-5 fs-md-2 pt-3 fw-bold">Cardio Kings</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Cardio Kings'] }}</p>
    </div>
    <div :class="{ 'highlight2': account.community == 'Weight Warriors', 'order-3': account.community == 'Legion of Leisure' }" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center flag">
      <div>
        <img class="w-75" src="../assets/img/flagWW.png" alt="Cardio Kings">
        <p class="fs-5 fs-md-2 pt-3 fw-bold">Weight Warriors</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Weight Warriors'] }}</p>
    </div>
    <div :class="{ 'highlight3': account.community == 'Legion of Leisure', 'order-3': account.community == 'Cardio Kings' }" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center flag">
      <div>
        <img class="w-75" src="../assets/img/flagLL.png" alt="Cardio Kings">
        <p class="fs-5 fs-md-2 pt-3 fw-bold">Legion of Leisure</p>
      </div>
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
          const isSure = await Pop.confirm(`Are you sure you want to join ${community}? You will be fighting for their glory through activities awarding your community points!`)

          if (!isSure) {
            return
          }
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
    border: solid 4px whitesmoke;
    box-shadow: inset 0 0 50px #fff,
      inset 20px 0 80px rgb(255, 0, 0),
      inset -20px 0 300px rgb(195, 0, 0),
      inset 20px 0 300px rgb(255, 0, 0),
      inset -20px 0 300px rgb(195, 0, 0),
      0 0 50px #fff,
      -10px 0 80px rgb(255, 0, 0),
      10px 0 80px rgb(195, 0, 0);
    transform: scale(1.10);
  }

  .highlight2 {
    border: solid 4px whitesmoke;
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
    border: solid 4px whitesmoke;
    box-shadow:
      inset 0 0 50px #fff,
      inset 20px 0 80px rgb(255, 234, 0),
      inset -20px 0 300px rgb(231, 213, 109),
      inset 20px 0 300px rgb(255, 234, 0),
      inset -20px 0 300px rgb(231, 213, 109),
      0 0 50px #fff,
      -10px 0 80px rgb(255, 234, 0),
      10px 0 80px rgb(231, 213, 109);
    transform: scale(1.10);
  }

  .scalable:hover {
    transform: scale(1.15);
  }
</style>