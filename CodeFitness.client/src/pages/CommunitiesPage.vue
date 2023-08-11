<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        side bar
      </div>
      <div class="col-10">
        <h2>Communities Page</h2>
        <div v-for="p in profiles" :key="p.id">
          <RouterLink :to="{ name: 'Profile', params: { profileId: p.id } }">
            {{ p.name }}
          </RouterLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { communitiesService } from '../services/CommunitiesService.js'
import { useRoute } from "vue-router"
import { computed, onMounted } from "vue"
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      getCommunityProfiles()
    })

    async function getCommunityProfiles() {
      try {
        let communityName = route.params.communityId
        await communitiesService.getCommunityProfiles(communityName)
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