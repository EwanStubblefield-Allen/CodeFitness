<template>
  <div class="container-fluid">
    <section class="row">
      <header class="col-12 bg-neutral py-2 px-0">
        <Navbar />
      </header>
      <div class="col-2 bg-neutral" v-if="account.id">
        <AccountBar />
      </div>
      <div class="col-2 bg-neutral" style="height: 100vh;" v-if="!account.id"></div>
      <div class="col-10 p-0">
        <main>
          <router-view />
        </main>
      </div>
    </section>

    <ModalComponent id="filterForm">
      <template #title>Filter</template>
      <template #body>
        <ActivityFilter />
      </template>
    </ModalComponent>

    <ModalComponent id="routineForm">
      <template #title>Create Routine</template>
      <template #body>
        <RoutineForm />
      </template>
    </ModalComponent>

    <ModalComponent v-if="appState.activeActivity" id="activeActivity" class="modal-lg">
      <template #title>{{ appState.activeActivity.name }}</template>
      <template #body>
        <ActivityDetails />
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import AccountBar from './components/AccountBar.vue'
import ModalComponent from './components/ModalComponent.vue'
import ActivityDetails from "./components/ActivityDetails.vue"
import ActivityFilter from "./components/ActivityFilter.vue"

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account)
    }
  },
  components: { Navbar, AccountBar, ModalComponent, ActivityDetails, ActivityFilter }
}
</script>
<style lang="scss">
  @import "./assets/scss/main.scss";

  :root {
    --main-height: calc(100vh - 32px - 64px);
    --darkest: #363737;
    --dark: #334F52;
    --neutral-dark: #406B6E;
    --neutral: #308484;
    --neutral-light: #67C5CB;
    --light: #BEDFEC;
    --background: #D9D9D9;
    --action: #34DCE7;
  }

  body {
    font-family: 'Aldrich', sans-serif;
  }

  p {
    margin: 0;
  }

  .dark-bg {
    background-color: var(--dark);
  }

  .bg-neutral-dark {
    background-color: var(--neutral-dark);
  }

  .bg-neutral {
    background-color: var(--neutral);
  }

  .bg-neutral-light {
    background-color: var(--neutral-light);
  }
</style>