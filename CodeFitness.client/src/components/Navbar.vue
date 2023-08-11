<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-neutral px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img src="../assets/img/codeFitness.png" alt="logo" height="55" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto">
        <li>
          <button @click="getHelp()">
          Help
          </button>
          <router-link :to="{ name: 'Home' }" class="btn text-success lighten-30 selectable text-uppercase">
            Home
          </router-link>
          <router-link :to="{ name: 'Account' }" v-if="account.community" class="btn text-success lighten-30 selectable text-uppercase">
            Account
          </router-link>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
          <div v-if="account.community" class="d-flex d-md-none justify-content-between align-items-center pt-2">
            <button v-if="routines.length" class="btn btn-action text-break" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRoutine">Routines</button>
            <button v-else class="btn btn-action text-break" data-bs-toggle="modal" data-bs-target="#routineForm">Routines</button>
            <button class="btn btn-action mt-1 text-break" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAchievements">Badges</button>
          </div>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import Login from './Login.vue'

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines)
    }

    function getHelp() {
      this.$tours['myTour'].start()
    }
  },
  components: { Login }
}
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }

  .nav-link {
    text-transform: uppercase;
  }

  .navbar-nav .router-link-exact-active {
    border-bottom: 2px solid var(--bs-success);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media screen and (min-width: 768px) {
    nav {
      height: 80px;
    }
  }
</style>