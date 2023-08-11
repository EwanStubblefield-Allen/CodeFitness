<template>
  <div class="col-12 col-md-10 offset-md-2">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-neutral-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Leaderboard
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div v-for="p in profiles" :key="p.id" class="card elevation-5 my-3 bg-neutral">
              <RouterLink :to="{ name: 'Profile', params: { profileId: p.id } }" class="card-body d-flex align-items-center">
                <img class="profile-pic m-2" :src="p.picture" :alt="p.name">
                <div>
                  <p class="text-break">{{ p.name }}</p>
                  <small class="text-light">Points: {{ p.points }}</small>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-neutral-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Suggested Routines
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <RoutineComponent v-if="communityRoutines.length" :routinesProp="communityRoutines">
              Suggested Routines
            </RoutineComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { communitiesService } from '../services/CommunitiesService.js'
import { useRoute } from "vue-router"
import { computed, onMounted, onUnmounted } from "vue"
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      getCommunityProfiles()
      getCommunityRoutinesByCommunity()
    })

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
    })

    async function getCommunityProfiles() {
      try {
        await communitiesService.getCommunityProfiles(route.params.communityId)
      } catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY PROFILES]')
      }
    }

    async function getCommunityRoutinesByCommunity() {
      try {
        await communitiesService.getCommunityRoutinesByCommunity(route.params.communityId)
      } catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY ROUTINES BY COMMUNITY]')
      }
    }

    return {
      profiles: computed(() => AppState.communityProfiles.sort((a, b) => b.points - a.points)),
      communityRoutines: computed(() => AppState.communityRoutines)
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile-pic {
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
</style>