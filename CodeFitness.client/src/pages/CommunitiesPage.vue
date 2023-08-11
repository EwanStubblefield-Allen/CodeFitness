<template>
  <div class="col-12 col-md-10 offset-md-2">
    <section class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed bg-neutral-light" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Leaderboard
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <h2 class="text-center">{{ profiles.length }} Active Community Members</h2>
            <div v-for="p in profiles" :key="p.id" class="card elevation-5 my-3 bg-neutral">
              <RouterLink :to="{ name: 'Profile', params: { profileId: p.id } }"
                class="card-body d-flex align-items-center">
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
          <button class="accordion-button collapsed bg-neutral-light" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
    </section>

    <section class="row pt-2">
      <h2>Community Chat</h2>
      <div v-for="c in comments" :key="c.id" class="py-3">
        <CommentComponent :commentProp="c" />
      </div>
    </section>

    <section class="row sticky-bottom p-3">
      <form v-if="account.community == route.params.communityId" @submit.prevent="handleSubmit()"
        class=" bg-neutral-light p-3 rounded elevation-5">
        <div class="form-group">
          <label for="comment">Comment</label>
          <input v-model="editable.body" id="comment" class="form-control" type="text" minlength="2" maxlength="100"
            placeholder="Leave your comment...">
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { communitiesService } from '../services/CommunitiesService.js'
import { useRoute } from "vue-router"
import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue"
import { AppState } from "../AppState.js"
import { commentsService } from "../services/CommentsService.js"
import CommentComponent from '../components/CommentComponent.vue'
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const route = useRoute()
    const editable = ref({})

    onMounted(() => {
      getCommunityProfiles()
      getCommunityRoutinesByCommunity()
      getComments()
    })

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
      AppState.comments = []
    })

    watchEffect(() => {
      if (AppState.activeComment) {
        editable.value = { ...AppState.activeComment }
      }
    })

    async function getCommunityProfiles() {
      try {
        await communitiesService.getCommunityProfiles(route.params.communityId)
      }
      catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY PROFILES]')
      }
    }

    async function getCommunityRoutinesByCommunity() {
      try {
        await communitiesService.getCommunityRoutinesByCommunity(route.params.communityId)
      }
      catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY ROUTINES BY COMMUNITY]')
      }
    }

    async function getComments() {
      try {
        const communityId = route.params.communityId
        await commentsService.getComments(communityId)
      }
      catch (error) {
        Pop.error(error.message)
      }
    }

    return {
      account: computed(() => AppState.account),
      profiles: computed(() => AppState.communityProfiles.sort((a, b) => b.points - a.points)),
      communityRoutines: computed(() => AppState.communityRoutines),
      comments: computed(() => AppState.comments),
      editable,
      route,

      handleSubmit() {
        if (editable.value.id) {
          this.editComment()
        } else {
          this.submitComment()
        }
        editable.value = {}
      },

      async submitComment() {
        try {
          editable.value.community = route.params.communityId
          await commentsService.submitComment(editable.value)
          document.documentElement.scrollTop = document.documentElement.scrollHeight
        }
        catch (error) {
          Pop.error(error.message)
        }
      },

      async editComment() {
        try {
          await commentsService.editComment(editable.value)
        } catch (error) {
          Pop.error(error.message, '[EDITING COMMENT]')
        }
      }
    }
  },
  components: { CommentComponent }
}
</script>

<style lang="scss" scoped></style>