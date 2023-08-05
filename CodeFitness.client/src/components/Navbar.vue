<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-neutral px-3">
    <!-- <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }"> -->
    <div class="d-flex flex-column align-items-center">
      <img type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" alt="logo" src="../assets/img/codeFitness.png" height="55" />
    </div>
    <!-- </router-link> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <!-- <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link> -->
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>

  <!-- SECTION Off Canvas -->
  <div class="offcanvas offcanvas-start  text-light offcanvas-width top-margin" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <!-- <div class="offcanvas-header  d-flex justify-content-center">
      <h5 class="offcanvas-title " id="offcanvasScrollingLabel"><img type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling" alt="logo" src="../assets/img/codeFitness.png" height="55" /></h5>
      <p type="button" class="mdi mdi-close text-light bg-neutral-dark fs-2" data-bs-dismiss="offcanvas"></p>
    </div> -->
    <div class="offcanvas-body container-fluid bg-neutral-dark ">
      <section class="row justify-content-center">
        <div class="col-11 bg-neutral-light mb-3 border-4 border border-light">
          <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
            <div class="text-light fs-2" data-bs-dismiss="offcanvas"> HOME</div>
          </router-link>
        </div>

        <div v-if="account.community" class="col-11 bg-neutral-light mb-3 border-4 border border-light">
          <router-link class="navbar-brand d-flex" :to="{ name: 'Account' }">
            <div class="text-light fs-2" data-bs-dismiss="offcanvas"> Account</div>
          </router-link>
        </div>

        <div class="col-11 bg-neutral-light mb-3 border-4 border border-light">
          <router-link class="navbar-brand d-flex" :to="{ name: 'About' }">
            <div class="text-light fs-2" data-bs-dismiss="offcanvas"> About</div>
          </router-link>
        </div>
        <div class="col-11 bg-neutral-light mb-3 border-4 border border-light">
          <!-- <router-link class="navbar-brand d-flex" :to="{ name: 'About' }"> -->
          <div class="text-light fs-2" data-bs-dismiss="offcanvas"> Template</div>
          <!-- </router-link> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { AppState } from "../AppState.js"
import Login from './Login.vue'

export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  },
  components: { Login }
}
</script>

<style scoped>
  .top-margin {
    margin-top: 80px;
  }

  a:hover {
    text-decoration: none;
  }

  .offcanvas-width {
    max-width: 16.7vw;
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
      height: 64px;
    }
  }
</style>