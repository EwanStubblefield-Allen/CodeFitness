<template>
  <div class="col-12 col-md-10 offset-md-2">
    <TeamComponent />
    <Tour v-if="wantsTour == true && firstStepTour == true || account.needsTour == true && firstStepTour == true" :steps="steps" :callbacks="callbacks" />
    <section v-if="account.community" class="row mx-1 my-3">
      <button @click="isEditing()" id="v-step-0" class="btn btn-action p-3 fs-3 v-step-2" type="button" data-bs-toggle="modal" data-bs-target="#routineForm">Create Routine</button>
    </section>

    <section class="row justify-content-center">
      <ActivitySearch />
    </section>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from "vue"
import { AppState } from "../AppState.js"
import ActivitySearch from '../components/ActivitySearch.vue'
import TeamComponent from '../components/TeamComponent.vue'
import { accountService } from "../services/AccountService"

export default {
  name: 'my-tour',
  setup() {
    onMounted(() => {
      AppState.activeRoutine = null
    })

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
    })

    return {
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines),
      wantsTour: computed(() => AppState.wantsTour),
      firstStepTour: computed(()=> AppState.firstStepTour),
      steps: [
        // {
        //   target: '#v-step-0',  // We're using document.querySelector() under the hood
        // header: {
        //   title: 'Get Started'
        // },
        //   content: `Pick a community to earn points and create routines!`,
        //   params: {
        //     enableScrolling: false
        // placement: 'top'
        //   }
        // },
        // {
        //   target: '.v-step-1',
        //   content: 'After you choose a community click on a banner to see whose scoring the most points, or Copy the routines of other members!',
        //   params: {
        //     enableScrolling: false,
        //     placement: 'top'
        //   }
        // },
        {
          target: '.v-step-2',
          content: 'Create a Routine then add activities to it!',
          params: {
            enableScrolling: false,
            placement: 'top'
          }
        }
      ],

      callbacks: {
        onFinish: (() => {
          AppState.wantsTour = false,
          // AppState.firstStepTour = true,
          accountService.updateAccount({needsTour: false})
        }),
        onSkip: (() => {
          AppState.wantsTour = false,
          accountService.updateAccount({needsTour: false})
        })
      },

      isEditing() {
        AppState.isEditing = false
      }
    }
  },
  components: { TeamComponent, ActivitySearch }
}
</script>

<style scoped lang="scss"></style>