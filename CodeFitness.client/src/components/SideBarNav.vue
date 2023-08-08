<template>
  <div class="col-11 bg-neutral-light mb-3 border-4 border border-light">
    <div data-bs-dismiss="offcanvas">
      <router-link class="navbar-brand text-center" :to="{ name: 'Home' }">
        <div class="text-light text-break fs-2">Home</div>
      </router-link>
    </div>
  </div>

  <div v-if="account.community" class="col-11 bg-neutral-light mb-3 border-4 border border-light">
    <div data-bs-dismiss="offcanvas">
      <router-link class="navbar-brand text-center" :to="{ name: 'Account' }">
        <div class="text-light text-break fs-2">Account</div>
      </router-link>
    </div>
  </div>

  <div class="col-11 bg-neutral-light mb-3 border-4 border border-light">
    <div data-bs-dismiss="offcanvas">
      <router-link class="navbar-brand text-center" :to="{ name: 'About' }">
        <div class="text-light text-break fs-2">About</div>
      </router-link>
    </div>
  </div>

  <!-- <div v-if="account.community" class="col-11 bg-neutral-light mb-3 border-4 border border-light">
    <div data-bs-dismiss="offcanvas">
      <router-link class="navbar-brand text-center" :to="{ name: 'Home' }">
        <div class="text-light fs-2">Routines</div>
      </router-link>
    </div>
  </div> -->
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'

export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped></style>