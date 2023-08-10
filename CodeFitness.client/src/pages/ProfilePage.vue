<template>
  blah
</template>

<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState.js"
import { useRoute } from "vue-router"
import { logger } from "../utils/Logger.js"
import { profilesService } from '../services/ProfilesService.js'
import Pop from "../utils/Pop.js"
import { routinesService } from "../services/RoutinesService.js"

export default {
  setup() {
    onMounted(() => {
      getActiveProfile()
      getRoutinesByProfileId()
    })

    async function getRoutinesByProfileId() {
      try {
        await routinesService.getRoutinesByProfileId(route.params.profileId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    async function getActiveProfile() {
      try {
        const profileId = route.params.profileId
        await profilesService.getActiveProfile(profileId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    const route = useRoute()
    return {
      profiles: computed(() => AppState.profiles),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped></style>