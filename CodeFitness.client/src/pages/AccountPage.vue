<template>
  <div class="col-12 col-md-10 offset-md-2">
    <section class="row">
      <div class="col-12 col-md-12 p-0 position-relative">
        <img class="cover-image" :src="account.coverImg" :alt="account.name">

        <div class="d-md-flex justify-content-between align-items-end position">
          <img class="account-picture" :src="account.picture" :alt="account.name">
          <div class="d-flex justify-content-end">
            <div class="fs-1 fs-bold text-center text-uppercase">{{ account.name }}</div>
            <div class=" text-start text-stroke fs-1 ps-3 mdi mdi-star-four-points text-warning"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="text-end">
      <button class="btn btn-action mt-3 mb-5 py-3" data-bs-toggle="modal" data-bs-target="#accountForm"> Edit Account
      </button>
    </div>

    <section class="row justify-content-center">
      <div class="col-12 col-md-9 mt-5 mb-3 fs-5">
        {{ account.bio }}
      </div>
    </section>
    <section class="row justify-content-center py-3">
      <div class="col-12 col-md-9 d-flex text-dark align-items-center justify-content-between">
        <div class="pe-3 fs-3">
          Recent Routines
        </div>
        <button class="btn btn-action">
          See more
          <i class="mdi mdi-plus-thick"></i>
        </button>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="col-12 col-md-9">
        <section class="row">
          <div v-for="r in routines" :key="r.id" class="col-12 col-md-4 pb-3">
            <div class="routine-bg rounded">
              <div class="reserved-space"></div>
              <img :src="r.picture" alt="Routine Image" class="img-fluid routine-pic rounded-top">
              <div class="routine-details p-2">
                <h5 class="p-2 text-center"> {{ r.title }}</h5>
                <p class="p-2 mb-2">{{ r.description }}</p>
                <div class="text-end">
                  <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: r.id } }">
                    <button @click="getRoutineById(r.id)" class="btn btn-action" type="button">Start Routine</button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="row">
      <div class="col-12 bg-neutral-light text-light text-center fs-1 py-3">
        Achievements
      </div>
      <div class="col-12 bg-secondary">
        <section class="row pt-5">
          <!-- <div v-for="i in 18" :key="i" class="col-6 col-md-2 pb-5 mb-3">
            <div class="d-flex justify-content-center">
              <img class="achievement-img" src="https://cdn.filestackcontent.com/4rXt91EuR7m88pBaQaZE" alt=""
                :title="`Achievement Name ${i}`">
            </div>
          </div> -->
          <div v-for="achievement in  achievements " :key="achievement.id" class="d-flex flex-column py-1">
            <h2>
              {{ achievement.type }} Progress: {{ achievement.progress }}
            </h2>
            <div class="d-flex text-light">
              <div v-for="tier in  achievement.achievementTier " :key="tier._id"
                class="col-3 d-flex achievement-card border border-light">
                <img class=" img-fluid" :class="achievement.tier >= tier.tier ? 'unlocked' : 'locked'" :src="tier.picture"
                  alt="" :title="tier.name">
                <div v-if="achievement.tier >= tier.tier - 1" class="d-flex flex-column justify-content-between">
                  <h3>
                    {{ tier.name }}
                  </h3>
                  <p>
                    {{ tier.description }}
                  </p>
                  <div v-if="achievement.tier == tier.tier - 1" class="progress" role="progressbar"
                    aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <!-- (achievement.requirement[tier.tier] / achievement.progress) * 10 -->
                    <div class="progress-bar"
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
import { computed, onMounted, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { routinesService } from "../services/RoutinesService"
import { accountAchievementService } from "../services/AccountAchievementService"
import { achievementService } from "../services/AchievementService"

export default {
  setup() {
    const editable = ref({})

    async function getAchievementsByUserId() {
      try {
        const achievement = accountAchievementService.getAchievementsByUserId()
      } catch (error) {
        Pop.error(error.message, '[]')
      }
    }
    watchEffect(() => {
      if (AppState.account.id) {
        getAchievementsByUserId()
      }
    })
    return {
      editable,
      account: computed(() => AppState.account),
      routines: computed(() => AppState.routines),
      picture: computed(() => `url(${AppState.account.picture})`),
      achievements: computed(() => AppState.activeAchievements),
      // setActiveRoutine(routine) {
      //   try {
      //     routinesService.setActiveRoutine(routine)
      //   } catch (error) {
      //     Pop.error(error.message)
      //     logger.log(error)
      //   }      },
      async getRoutineById(routineId) {
        try {
          await routinesService.getRoutineById(routineId)
        } catch (error) {
          Pop.error(error.message, '[GETTING ROUTINE BY ID]')
        }
      }
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