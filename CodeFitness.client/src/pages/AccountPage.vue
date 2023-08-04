<template>
  <div class="col-12 col-md-10">
    <section class="row">
      <div class="col-12 col-md-12 p-0 position-relative">
        <img class="cover-image" src="https://plus.unsplash.com/premium_photo-1687672031143-9d430c8e7d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" :alt="account.name">

        <div class="d-flex justify-content-between align-items-end position">
          <img class="account-picture" :src="account.picture" :alt="account.name">
          <div class="d-flex justify-content-end">
            <div class="fs-1 fs-bold text-center text-uppercase">{{ account.name }}</div>
            <div class=" text-start text-stroke fs-1 ps-3 mdi mdi-star-four-points text-warning"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="text-end">
      <button class="btn btn-action mt-3 mb-5 py-3" data-bs-toggle="modal" data-bs-target="#accountForm"> Edit Account </button>
    </div>

    <section class="row justify-content-center">
      <div class="col-12 col-md-9 mt-5 mb-3 fs-5">
        {{ account.bio }}
      </div>
    </section>
    <section class="row justify-content-center py-3">
      <div class="col-12 col-md-9 d-flex text-dark align-items-center">
        <div class="pe-3 fs-3">
          Recent Routines
        </div>
        <button class="btn btn-action">
          See more
          <i class="mdi mdi-plus-thick"></i>
        </button>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="col-12 col-md-9">
        <section class="row">
          <div v-for="i in 3" :key="i" class="col-12 col-md-4 pb-3">
            <div class="routine-bg rounded">
              <div class="reserved-space"></div>
              <div class="routine-details p-2">
                <h5 class="">Routine {{ i }}</h5>
                <p class="">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <div class="text-end">
                  <button class="btn btn-action" type="button">Start Routine</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="row">
      <div class="col-12 bg-primary text-light text-center fs-1 py-3">
        Achievements
      </div>
      <div class="col-12 bg-secondary">
        <section class="row pt-5">
          <div v-for="i in 18" :key="i" class="col-6 col-md-2 pb-5 mb-3">
            <div class="d-flex justify-content-center">
              <img class="achievement-img" src="https://cdn.filestackcontent.com/4rXt91EuR7m88pBaQaZE" alt="" :title="`Achievement Name ${i}`">
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
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
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }

  .routine-bg {
    background-image: url('https://wger.de/media/exercise-images/1012/8270fdb8-28f1-4eff-b410-af8642085b3f.png');
  }

  .reserved-space {
    height: 30vh;
  }

  .routine-details {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 16px 16px;
    /* border-bottom: 1px solid black; */
    backdrop-filter: blur(13.6px);
    -webkit-backdrop-filter: blur(13.6px);
  }

  .achievement-img {
    height: 15vh;
    width: 15vh;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    /* filter: drop-shadow(0px 6px black); */
    outline: 16px solid rgb(90, 90, 90);
  }
</style>