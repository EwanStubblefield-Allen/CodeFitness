<template>
  <div v-if="profile" class="col-12 col-md-10 offset-md-2">
    <ProfileDetails :profileProp="profile" />

    <RoutineComponent :routinesProp="routines" v-if="routines[0]">
      Their Recent Routines:
    </RoutineComponent>
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
      routines: computed(() => AppState.profileRoutines)
    }
  },
  components: { ProfileDetails }
}
</script>

<style lang="scss" scoped></style>