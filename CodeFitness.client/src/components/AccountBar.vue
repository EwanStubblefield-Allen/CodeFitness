<template>
  <section class="row mb-3">
    <img class="community-img " src="../assets/img/yellow-flag.png" alt="Yellow">
  </section>
  <section class="row mb-3">
    <div class="col-11 m-auto bg-light d-flex justify-content-center p-3 bg-cover-img">
      <img class="account-picture " :src="account.picture" :alt="account.name" :title="account.name">
    </div>
  </section>
  <section class="row mb-3">
    <div class="col-11 m-auto text-center text-dark bg-light fs-1">
      <div class="mb-3">
        <p>Your Points</p>
        <p>0</p>
      </div>

      <p class="mb-3"> Your Routines</p>
      <div v-for="routine in 3" :key="routine" class="bg-neutral-light mb-2">
        Routine {{ routine }}
      </div>
    </div>
  </section>
  <!-- <section class="row mb-3">
  </section> -->
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {

    })

    return {
      account: computed(() => AppState.account)
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