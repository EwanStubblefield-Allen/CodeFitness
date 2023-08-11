<template>
  blah
</template>

<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState.js"
import { useRoute } from "vue-router"
import { profilesService } from '../services/ProfilesService.js'
import { routinesService } from "../services/RoutinesService.js"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      getActiveProfile()
      getRoutinesByProfileId()
    })

    async function getRoutinesByProfileId() {
      try {
        await routinesService.getRoutinesByProfileId(route.params.profileId)
      } catch (error) {
        Pop.error(error.message, '[GETTING ROUTINES BY PROFILE ID]')
      }
    }

    function getActiveProfile() {
      try {
        const profileId = route.params.profileId
        profilesService.getActiveProfile(profileId)
      } catch (error) {
        Pop.error(error.message, '[GETTING ACTIVE PROFILE]')
      }
    }

    return {
      profiles: computed(() => AppState.profiles),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped></style>