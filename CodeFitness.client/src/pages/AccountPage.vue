<template>
  <div class="col-12 col-md-10 offset-md-2">
    <section class="row">
      <div class="col-12 col-md-12 p-0 position-relative">
        <img class="cover-image" :src="account.coverImg" @error="randomCoverImg()" :alt="account.name">

        <div class="d-md-flex justify-content-between align-items-end position">
          <img class="account-picture" :src="account.picture" @error="randomProfileImg()" :alt="account.name">
          <div class="d-flex justify-content-end">
            <div class="fs-1 fs-bold text-center text-break text-uppercase">{{ account.name }}</div>
            <div class=" text-start text-stroke fs-1 ps-3 mdi mdi-star-four-points text-warning"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <button class="btn btn-lg btn-block mt-5 mt-md-3 mb-5 py-5" data-bs-toggle="modal" data-bs-target="#accountForm">
        <i class="mdi mdi-pencil"></i>
      </button>
    </div>

    <section class="row justify-content-center">
      <div class="col-12 col-md-9 mt-5 mb-3 fs-5 text-break">
        {{ account.bio }}
      </div>
    </section>
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
              <!-- <div class="reserved-space"></div> -->
              <img :src="routines[r - 1].picture" alt="Routine Image" class="img-fluid routine-pic rounded-top">
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
              <!-- <div class="reserved-space"></div> -->
              <img :src="r.picture" alt="Routine Image" class="img-fluid routine-pic rounded-top w-100">
              <div class="routine-details p-2">
                <h5 class="p-2 text-center"> {{ r.title }}</h5>
                <p class="p-2 mb-2">{{ r.description }}</p>
                <div class="text-end">
                  <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: r.id } }">
                    <button v-if="r.activities[0]" @click="getRoutineById(r.id)" class="btn btn-action"
                      type="button">Start Routine</button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="col-12 bg-neutral-light text-light text-center fs-1 py-3">
        Achievements
      </div>
      <div class="col-12 bg-secondary">
        <section class="row pt-5">
          <h1>
            {{ completed }} Achievements out of 16
          </h1>
          <div v-for="achievement in  achievements " :key="achievement.id" class="d-flex flex-column py-1">
            <h2>
              {{ achievement.type }} Progress: {{ achievement.progress }}
            </h2>
            <div class="row text-light">
              <div v-for="tier in  achievement.achievementTier " :key="tier._id"
                class="col-12 col-md-6 col-lg-3 d-flex achievement-card border border-light">
                <img class=" img-fluid" :class="achievement.tier >= tier.tier ? 'unlocked' : 'locked'" :src="tier.picture"
                  alt="" :title="tier.name">
                <div v-if="achievement.tier >= tier.tier - 1" class="d-flex flex-column justify-content-between">
                  <h3>
                    {{ tier.name }}
                  </h3>
                  <p>
                    {{ tier.description }}
                  </p>
                  <div v-if="achievement.tier == tier.tier - 1" class="progress bg-dark rounded-0 m-2 border border-light"
                    role="progressbar">
                    <div class="progress-bar bg-success"
                      :style="{ 'width': (achievement.progress / achievement.requirement[tier.tier - 1]) * 100 + '%' }">
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
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { routinesService } from "../services/RoutinesService"
import { accountAchievementService } from "../services/AccountAchievementService"
import Pop from "../utils/Pop"
import { accountService } from "../services/AccountService.js"

export default {
  setup() {
    const editable = ref({})

    const showAmount = ref({})

    onMounted(() => showAmount.value = 3)

    async function getAchievementsByUserId() {
      try {
        await accountAchievementService.getAchievementsByUserId()
      } catch (error) {
        Pop.error(error.message, '[]')
      }
    }

    function randomCoverImg() {
      let array = AppState.randomImgForCover
      let randomNum = Math.floor(Math.random() * array.length)
      AppState.account.coverImg = array[randomNum]
      Pop.error('Invalid Image URL for Cover Image')
    }

    function randomProfileImg() {
      let array = AppState.randomImgForProfile
      let randomNum = Math.floor(Math.random() * array.length)
      AppState.account.picture = array[randomNum]
      Pop.error('Invalid Image URL for Profile Image')
    }

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
    })

    watchEffect(() => {
      if (AppState.account.id) {
        getAchievementsByUserId()
      }
    })

    return {
      editable,
      showAmount,
      randomCoverImg,
      randomProfileImg,
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
  }
}
</script>

<style scoped>
  .account-picture {
    width: 20vh;
    height: 20vh;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  .position {
    position: absolute;
    bottom: -10vh;
    left: 5vw;
  }

  .cover-image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 50vh;
  }

  .text-stroke {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }

  .routine-pic {
    background-image: v-bind(picture);
    object-fit: cover;
    object-position: center;
    height: 30vh;
  }

  .reserved-space {
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