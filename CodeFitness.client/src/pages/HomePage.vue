<template>
  <div class=" col-12 col-md-10 offset-md-2">
    <TeamComponent />
    <Tour v-if="account.needsTour" :steps="steps" :callbacks="callbacks" />
    <section v-if="account.community" class="row mx-1 my-3">
      <button @click="isEditing()" id="v-step-0" class="btn btn-action p-3 fs-3 v-step-1" type="button"
        data-bs-toggle="modal" data-bs-target="#routineForm">Create Routine</button>
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
import { logger } from "../utils/Logger"
import { router } from "../router"
import { useRoute } from "vue-router"
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
      steps: [
        {
          target: '#v-step-0',  // We're using document.querySelector() under the hood
          header: {
            title: 'Get Started'
          },
          content: `Pick a community to earn points and create routines!`,
          params: {
            enableScrolling: false
            // placement: 'top'
          }
        },
        {
          target: '.v-step-1',
          content: 'Create a Routine then add activities to it!',
          params: {
            enableScrolling: false,
            placement: 'top'
          }
        }
        // {
        //   target: '[data-v-step="2"]',
        //   content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        //   params: {
        //     placement: 'top' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
        //   }
        // }
      ],

      callbacks: {
        onFinish: (() => {
          logger.log('finish')
        }),
        onSkip: (() => logger.log('skipped'))
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