<template>
  <div v-if="profile" class="col-12 col-md-10 offset-md-2">
    <ProfileDetails :profileProp="profile" />

    <RoutineComponent :routinesProp="routines" v-if="routines[0]">
      Their Recent Routines:
    </RoutineComponent>

    <section class="row">
      <div class="col-12 bg-neutral-light text-center fs-1 py-3">
        Stats
      </div>
      <div class="col-12 bg-secondary">
        <ul class="row justify-content-center pt-5">
          <li class="col-10 col-md-5 fs-3">{{ completed }} Badges out of 16</li>
          <li class="col-10 col-md-5 fs-3">Points: {{ profile.points }}</li>
          <li class="col-10 col-md-5 fs-3">Routines Created: {{ profile.achievements[2].progress }}</li>
          <li class="col-10 col-md-5 fs-3">Activities Count: {{ activityCount }}</li>
          <li class="col-10 col-md-5 fs-3">Routine Complete Count: {{ profile.achievements[3].progress }}</li>
          <li class="col-10 col-md-5 fs-3">Highest Activity Level: {{ profile.achievements[0].progress }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onUnmounted, watchEffect } from "vue"
import { AppState } from "../AppState.js"
import { useRoute } from "vue-router"
import { profilesService } from '../services/ProfilesService.js'
import { routinesService } from "../services/RoutinesService.js"
import ProfileDetails from "../components/ProfileDetails.vue"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const route = useRoute()
    onUnmounted(() => {
      document.documentElement.scrollTop = 0
      AppState.activeProfile = null
    })

    watchEffect(() => {
      getProfileById()
      getRoutinesByProfileId()
    })

    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId)
      }
      catch (error) {
        Pop.error(error.message, '[GETTING ACTIVE PROFILE]')
      }
    }

    async function getRoutinesByProfileId() {
      try {
        await routinesService.getRoutinesByProfileId(route.params.profileId)
      }
      catch (error) {
        Pop.error(error.message, '[GETTING ROUTINES BY PROFILE ID]')
      }
    }

    return {
      profile: computed(() => AppState.activeProfile),
      routines: computed(() => AppState.profileRoutines.sort((a, b) => b.updatedAt - a.updatedAt)),
      activityCount: computed(() => {
        let count = 0
        AppState.profileRoutines.forEach(r => {
          count += r.activities.length
        })
        return count
      }),
      completed: computed(() => {
        let complete = 0
        AppState.activeProfile.achievements.forEach(a => {
          complete += a.tier
        })
        return complete
      })
    }
  },
  components: { ProfileDetails }
}
</script>

<style lang="scss" scoped></style>