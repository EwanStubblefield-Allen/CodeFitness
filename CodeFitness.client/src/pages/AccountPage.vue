<template>
  <div class="col-12 col-md-10 offset-md-2">
    <ProfileDetails :profileProp="account" />

    <section class="row justify-content-center py-3">
      <div class="col-12 col-md-9 d-flex text-dark align-items-center justify-content-between">
        <div class="pe-3 fs-3">
          Recent Routines
        </div>

        <div v-if="routines.length > 3">
          <div v-if="showAmount == 3">
            <button @click="showAmount = routines.length" class="btn btn-action">
              See more
              <i class="mdi mdi-plus-thick"></i>
            </button>
          </div>
          <div v-else>
            <button @click="showAmount = 3" class="btn btn-action">
              See less
              <i class="mdi mdi-minus-thick"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
    <section class="row justify-content-center text-break">
      <div class="col-12 col-md-9">
        <section v-if="account.id && (routines.length >= 3)" class="row">
          <div v-for="r in showAmount" :key="r" class="col-12 col-md-4 pb-3">
            <div class="routine-bg rounded">
              <img :src="routines[r - 1].picture" @error="randomRoutineImg()" alt="Routine Image" class="img-fluid routine-pic rounded-top">
              <div class="routine-details p-2">
                <h5 class="p-2 text-center"> {{ routines[r - 1].title }}</h5>

                <p class="p-2 mb-2">{{ routines[r - 1].description }}</p>
                <div class="text-end">
                  <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: routines[r - 1].id } }">
                    <button @click="getRoutineById(routines[r - 1].id)" class="btn btn-action" type="button">Start
                      Routine</button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div v-else class="row">
          <div v-for="r in routines" :key="r.id" class="col-12 col-md-4 pb-3">
            <div class="routine-bg rounded">
              <img :src="r.picture" @error="randomRoutineImg()" alt=" Routine Image" class="img-fluid routine-pic rounded-top w-100">
              <div class="routine-details p-2">
                <h5 class="p-2 text-center"> {{ r.title }}</h5>
                <p class="p-2 mb-2">{{ r.description }}</p>
                <div class="text-end">
                  <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: r.id } }">
                    <button v-if="r.activities.length" @click="getRoutineById(r.id)" class="btn btn-action" type="button">Start Routine</button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="col-12 bg-neutral-light text-center fs-1 py-3">
        Badges
      </div>
      <div class="col-12 bg-secondary">
        <section class="row pt-5">
          <h1>
            Completed {{ completed }} out of 16
          </h1>
          <div v-for="achievement in  achievements " :key="achievement.id" class="d-flex flex-column py-1">
            <h2>
              {{ achievement.name }} Progress: {{ achievement.progress }}
            </h2>
            <div class="row text-light">
              <div v-for="tier in  achievement.achievementTier " :key="tier._id" class="col-12 col-md-6 col-xl-3 d-flex achievement-card border border-light">
                <img class=" img-fluid" :class="achievement.tier >= tier.tier ? 'unlocked' : 'locked'" :src="tier.picture" alt="" :title="tier.name">
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
import { computed, onUnmounted, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { accountAchievementService } from "../services/AccountAchievementService"
import ProfileDetails from '../components/ProfileDetails.vue'
import Pop from "../utils/Pop"

export default {
  setup() {
    const editable = ref({})
    const showAmount = ref(3)

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
      editable,
      showAmount,
      account: computed(() => AppState.account),
      picture: computed(() => `url(${AppState.account.picture})`),
      achievements: computed(() => AppState.activeAchievements),
      routines: computed(() => {
        return AppState.routines.sort((a, b) => b.updatedAt - a.updatedAt)
      }),
      completed: computed(() => {
        let complete = 0
        AppState.activeAchievements.forEach(a => {
          complete += a.tier
        })
        return complete
      })
    }
  },
  components: { ProfileDetails }
}
</script>

<style scoped>
  .routine-pic {
    background-image: v-bind(picture);
    object-fit: cover;
    object-position: center;
    height: 30vh;
  }

  .routine-details {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 16px 16px;
    /* border-bottom: 1px solid black; */
    backdrop-filter: blur(13.6px);
    -webkit-backdrop-filter: blur(13.6px);
  }

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