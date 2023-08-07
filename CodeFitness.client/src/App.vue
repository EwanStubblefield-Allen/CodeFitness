<template>
  <header class="bg-neutral py-2 px-0 elevation-5 sticky-top">
    <Navbar />
  </header>
  <main class="container-fluid">
    <section class="row">
      <div v-if="account.id" class="col-2 bg-neutral">
        <AccountBar />
      </div>
      <div v-else class="col-2 bg-neutral" style="height: 100vh;"></div>
      <router-view />
    </section>
  </main>

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

  <ModalComponent id="accountForm">
    <template #title>Edit Account</template>
    <template #body>
      <AccountForm />
    </template>
  </ModalComponent>

  <ModalComponent v-if="appState.activeActivity" id="activeActivity" class="modal-lg">
    <template #title>{{ appState.activeActivity.name }}</template>
    <template #body>
      <ActivityDetails />
    </template>
  </ModalComponent>

  <Offcanvas id="offcanvasScrolling">
    <SideBarNav />
  </Offcanvas>

  <Offcanvas id="offcanvasRoutine">
    <RoutineList />
  </Offcanvas>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import AccountBar from './components/AccountBar.vue'
import ModalComponent from './components/ModalComponent.vue'
import ActivityDetails from "./components/ActivityDetails.vue"
import ActivityFilter from "./components/ActivityFilter.vue"
import AccountForm from "./components/AccountForm.vue"
import Offcanvas from './components/Offcanvas.vue'
import SideBarNav from './components/SideBarNav.vue'
import RoutineList from './components/RoutineList.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account)
    }
  },
  components: { Navbar, AccountBar, ModalComponent, ActivityDetails, ActivityFilter, AccountForm, Offcanvas, SideBarNav, RoutineList }
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

  .btn-action:hover {
    color: black;
    background-color: var(--light);
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)
  }

  .btn-action,
  .btn-action:active {
    color: black !important;
    background-color: var(--action) !important;
    box-shadow: none;
  }
</style>