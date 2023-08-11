<template>
  <div class="container-fluid flex-grow-1">
    <header class="row bg-neutral elevation-5 sticky-top">
      <Navbar />
    </header>
    <main class="row">
      <div class="col-2 d-none d-md-block bg-neutral position-fixed h-100">
        <AccountBar />
      </div>

      <router-view />
    </main>
  </div>

  <ModalComponent id="filterForm">
    <template #title>Filter</template>
    <template #body>
      <ActivityFilter />
    </template>
  </ModalComponent>

  <ModalComponent id="routineForm">
    <template #title>Routine Form</template>
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
    <template #title>
      {{ appState.activeActivity.name }}
    </template>
    <template #body>
      <ActivityDetails />
    </template>
  </ModalComponent>

  <ModalComponent v-if="appState.activeRoutine" id="activeRoutine" class="modal-lg">
    <template #title>
      {{ appState.activeRoutine.title }}
    </template>
    <template #body>
      <RoutineDetails />
    </template>
  </ModalComponent>

  <Offcanvas id="offcanvasRoutine">
    <template #title>
      Routines
    </template>
    <template #body>
      <RoutineList />
    </template>
  </Offcanvas>

  <Offcanvas id="offcanvasAchievements">
    <template #title>
      Badges
    </template>
    <template #body>
      <AchievementList />
    </template>
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
import RoutineList from './components/RoutineList.vue'
import RoutineDetails from './components/RoutineDetails.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account)
    }
  },
  components: { Navbar, AccountBar, ModalComponent, ActivityDetails, ActivityFilter, AccountForm, Offcanvas, RoutineList, RoutineDetails }
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

  .background-light {
    background-color: var(--light);
  }

  .bg-action {
    background-color: var(--action);
  }

  .text-neutral {
    color: var(--neutral);
  }

  .text-neutral-light {
    color: var(--neutral-light);
  }

  .text-dark-theme {
    color: var(--dark);
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

  .profile-pic {
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
</style>