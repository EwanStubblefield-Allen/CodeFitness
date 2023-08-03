<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-0">
        <div class="">
          <img class="img-fluid cover-image"
            src="https://plus.unsplash.com/premium_photo-1687672031143-9d430c8e7d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Alt image yo">
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-4 d-flex justify-content-center">
        <img class="account-picture" :src="account.picture" :alt="account.name">
      </div>

      <div class="col-2">
        <div class="fs-1 text-center text-uppercase">{{ account.name }}</div>
      </div>

      <div class="col-3">
        <div class=" text-start text-stroke fs-1 ps-3 mdi mdi-star-four-points text-warning"></div>
      </div>
    </section>

    <section class="row">
      <div class="col-9 m-auto mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, veritatis excepturi fugiat, neque mollitia
        explicabo nesciunt perferendis doloribus facere quidem id vel ullam aperiam nemo magni maiores blanditiis dicta
        exercitationem! Deserunt fugiat delectus quo optio reprehenderit ducimus id consequuntur officia dicta? Voluptas
        corporis illo tenetur nemo dolorum, officia deserunt magnam.
      </div>
    </section>
    <section class="row mb-3">
      <div class="col-9 m-auto d-flex text-dark align-items-center">
        <div class="pe-3">
          Recent Routines
        </div>
        <button class="btn btn-primary">
          See more
          <i class="mdi mdi-plus-thick"></i>
        </button>
      </div>
    </section>
    <section class="row">
      <div class="col-9 m-auto">
        <section class="row">
          <div v-for="i in 3" :key="i" class="col-4 pb-3">
            <div class="routine-bg rounded">
              <div class="reserved-space"></div>
              <div class="routine-details p-2">
                <h5 class="">Routine {{ i }}</h5>
                <p class="">Some quick example text to build on the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" class="btn btn-primary">Start Routine</a>
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
          <div v-for="i in 18" :key="i" class="col-2 pb-5 mb-3">
            <div class="d-flex justify-content-center">
              <img class="achievement-img" src="https://cdn.filestackcontent.com/4rXt91EuR7m88pBaQaZE" alt=""
                :title="`Achievement Name ${i}`">
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
    position: relative;
    top: -10vw;
    /* left: 20vh; */
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  .account-name {
    position: relative;
    left: 50vh;
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

  /* img {
    max-width: 100px;
  } */
</style>