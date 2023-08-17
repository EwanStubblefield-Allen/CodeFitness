<template>
  <div class="col-12 col-md-10 offset-md-2">
    <ProfileDetails :profileProp="account" />

    <RoutineComponent v-if="routines.length" :routinesProp="routines">
      Your Recent Routines:
    </RoutineComponent>

    <section class="row">
      <div class="col-12 bg-neutral-light text-center fs-1 py-3">
        Badges
      </div>
      <div class="col-12 bg-secondary">
        <section class="row pt-5">
          <Tour v-if="wantsTour == true || account.needsTour == true" :steps="steps" :callbacks="callbacks" />
          <h1 class="v-step-7">
            Completed {{ completed }} out of 16
          </h1>
          <div v-for="achievement in achievements" :key="achievement.id" class="d-flex flex-column py-1">
            <h2>
              {{ achievement.name }} Progress: {{ achievement.progress }}
            </h2>
            <div class="row text-light">
              <div v-for="tier in achievement.achievementTier" :key="tier._id" class="col-12 col-md-6 col-xl-3 d-flex achievement-card border border-light">
                <img class="img-fluid" :class="achievement.tier >= tier.tier ? 'unlocked' : 'locked'" :src="tier.picture" alt="" :title="tier.name">
                <div v-if="achievement.tier >= tier.tier - 1" class="d-flex flex-column justify-content-between">
                  <h3>
                    {{ tier.name }}
                  </h3>
                  <p>
                    {{ tier.description }}
                  </p>
                  <div v-if="achievement.tier == tier.tier - 1" class="progress bg-dark rounded-0 m-2 border border-light" role="progressbar">
                    <div class="progress-bar bg-success" :style="{ 'width': (achievement.progress / achievement.requirement[tier.tier - 1]) * 100 + '%' }">
                    </div>
                  </div>
                </div>
                <div v-else class="d-flex flex-column justify-content-center">
                  <h3>
                    -HIDDEN-
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onUnmounted, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { accountService } from "../services/AccountService"
import { accountAchievementService } from "../services/AccountAchievementService"
import ProfileDetails from '../components/ProfileDetails.vue'
import Pop from "../utils/Pop"
import RoutineComponent from '../components/RoutineComponent.vue'

export default {
  setup() {
    async function getAchievementsByUserId() {
      try {
        await accountAchievementService.getAchievementsByUserId()
      }
      catch (error) {
        Pop.error(error.message, '[GETTING ACHIEVEMENTS BY USER ID]')
      }
    }

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
    })

    watchEffect(() => {
      if (AppState.account.id) {
        getAchievementsByUserId()
      }
    })

    // function randomRoutineImg() {
    //   // let array = AppState.randomImgForRoutine
    //   // let randomNum = Math.floor(Math.random() * array.length)
    //   // AppState.routines.picture = array[randomNum]
    //   Pop.error('Invalid Image URL for Routine Image. Please update the URL on your routine!')
    // }

    return {
      account: computed(() => AppState.account),
      picture: computed(() => `url(${AppState.account.picture})`),
      achievements: computed(() => AppState.activeAchievements),
      wantsTour: computed(() => AppState.wantsTour),
      routines: computed(() => AppState.routines.sort((a, b) => b.updatedAt - a.updatedAt)),
      completed: computed(() => {
        let complete = 0
        AppState.activeAchievements.forEach(a => {
          complete += a.tier
        })
        return complete
      }),

      steps: [

        {
          target: '.v-step-7',
          content: 'Unlock Badges by doing Routines!',
          params: {
            enableScrolling: true,
            placement: 'top'
          }
        }
      ],

      callbacks: {
        onFinish: (() => {
          AppState.wantsTour = false
          accountService.updateAccount({ needsTour: false })
        }),
        onSkip: (() => {
          AppState.wantsTour = false
          accountService.updateAccount({ needsTour: false })
        })
      }
    }
  },
  components: { ProfileDetails, RoutineComponent }
}
</script>

<style scoped>
  .achievement-card {
    background-image: linear-gradient(var(--darkest), var(--neutral-dark));
  }

  .locked {
    height: 15vh;
    width: 15vh;
    padding: 1vh;
    filter: contrast(0) brightness(0) drop-shadow(3px 3px var(--action)) drop-shadow(-3px -3px var(--light));
  }

  .unlocked {
    height: 15vh;
    width: 15vh;
    padding: 1vh;
    filter: drop-shadow(3px 3px var(--darkest)) drop-shadow(-3px -3px var(--neutral-dark));
  }
</style>