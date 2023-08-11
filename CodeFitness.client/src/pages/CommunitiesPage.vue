<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        side bar
      </div>
      <div v-if="profiles" class="col-10">
        <h2>Communities Page</h2>
        <div v-for="p in profiles" :key="p.id">
          <RouterLink :to="{ name: 'Profile', params: { profileId: p.id } }">
            <p class="text-break">
              {{ p.name }}
            </p>
          </RouterLink>
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

    return {
      profiles: computed(() => AppState.communityProfiles)
    }
  }
}
</script>

<style lang="scss" scoped></style>