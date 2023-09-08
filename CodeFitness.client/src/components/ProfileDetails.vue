<template>
  <section class="row">
    <div class="col-12 col-md-12 p-0 position-relative">
      <img class="cover-image" :src="profileProp.coverImg" @error="randomCoverImg()" :alt="profileProp.name">

      <div class="d-md-flex justify-content-between align-items-end position">
        <img class="account-picture" :src="profileProp.picture" @error="randomProfileImg()" :alt="profileProp.name">
      </div>
    </div>
  </section>

  <section class="row justify-content-between">
    <div class="offset-md-2 col-10 col-md-8 order-2 order-md-1 d-flex justify-content-md-center align-items-center pt-3">
      <div class="fs-1 fs-bold text-center text-break text-uppercase">{{ profileProp.name }}</div>
      <img v-if="profileProp.community == 'Cardio Kings'" class="text-stroke px-3" src="../assets/img/flagCK.png" alt="Cardio Kings">
      <img v-else-if="profileProp.community == 'Weight Warriors'" class="text-stroke px-3" src="../assets/img/flagWW.png" alt="Weight Warriors">
      <img v-else-if="profileProp.community == 'Legion of Leisure'" class="text-stroke px-3" src="../assets/img/flagLL.png" alt="Legion of Leisure">
    </div>

    <div v-if="account.id == profileProp.id" class="col-12 col-md-2 order-1 order-md-2 text-end">
      <button class="btn btn-lg btn-block mdi mdi-pencil fs-3" data-bs-toggle="modal" data-bs-target="#accountForm" title="Edit Account"></button>
    </div>
    <div v-else class="col-12 col-md-2 order-1 order-md-2 text-end py-4"></div>
  </section>

  <section class="row justify-content-center">
    <div class="col-12 col-md-9 py-3 fs-5 text-break">
      {{ profileProp.bio }}
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { accountService } from '../services/AccountService.js'
import Pop from '../utils/Pop.js'

export default {
  props: {
    profileProp: {
      type: Object,
      required: true
    }
  },

  setup() {
    function randomCoverImg() {
      let array = AppState.randomImgForCover
      let randomNum = Math.floor(Math.random() * array.length)
      AppState.account.coverImg = array[randomNum]
      Pop.error('Invalid Image URL for Cover Image')
    }

    async function randomProfileImg() {
      try {
        await accountService.updateBadPicture()
      }
      catch (error) {
        Pop.error(error.message)
      }
      Pop.error('Invalid Image URL for Profile Image')
    }

    return {
      randomCoverImg,
      randomProfileImg,
      account: computed(() => AppState.account),
      wantsTour: computed(() => AppState.wantsTour),
      steps: [
        {
          target: '.v-step-6',  // We're using document.querySelector() under the hood
          header: {
            title: 'Get Started'
          },
          content: `Pick a community to earn points and create routines!`
          // params: {
          //   enableScrolling: true,
          //   placement: 'right'
          // }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .account-picture {
    width: 20vh;
    height: 20vh;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  .position {
    position: absolute;
    bottom: -10vh;
    left: 5vw;
  }

  .cover-image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 50vh;
  }

  .text-stroke {
    height: 8vh;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }
</style>