<template>
  <div class="col-12 col-md-10 offset-md-2">
    <Tour v-if="wantsTour == true || account.needsTour == true" :steps="steps" :callbacks="callbacks" />
    <section class="accordion py-3" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header v-step-11">
          <button class="accordion-button collapsed bg-neutral-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Leaderboard
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <h2 class="text-center">{{ profiles.length }} Active Community Members</h2>
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
        <h2 class="accordion-header v-step-12">
          <button class="accordion-button collapsed bg-neutral-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Suggested Routines
          </button>
        </h2>

        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <RoutineComponent :routinesProp="communityRoutines">
              Suggested Routines
            </RoutineComponent>
          </div>
        </div>
      </div>
    </section>

    <section class="row pt-2">
      <h2>Community Chat</h2>
      <div v-for="c in comments" :key="c.id" class="py-2">
        <CommentComponent :commentProp="c" />
      </div>
    </section>

    <section class="row sticky-bottom p-3 v-step-13">
      <form v-if="account.community == route.params.communityId" @submit.prevent="handleSubmit()" class="bg-neutral-light p-3 rounded elevation-5">
        <div class="form-group">
          <label for="comment">Comment</label>
          <input v-model="editable.body" id="comment" class="form-control" type="text" minlength="2" maxlength="100" placeholder="Leave your comment...">
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { useRoute } from "vue-router"
import { computed, onUnmounted, ref, watchEffect } from "vue"
import { AppState } from "../AppState.js"
import { accountService } from "../services/AccountService"
import { communitiesService } from '../services/CommunitiesService.js'
import { commentsService } from "../services/CommentsService.js"
import RoutineComponent from '../components/RoutineComponent.vue'
import CommentComponent from '../components/CommentComponent.vue'
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const route = useRoute()
    const editable = ref({})

    watchEffect(() => {
      getCommunityProfiles(route.params.communityId)
      getCommunityRoutinesByCommunity(route.params.communityId)
      getComments(route.params.communityId)
    })

    watchEffect(() => {
      if (AppState.activeComment) {
        editable.value = { ...AppState.activeComment }
      }
    })

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
      AppState.comments = []
    })

    async function getCommunityProfiles(communityId) {
      try {
        await communitiesService.getCommunityProfiles(communityId)
      }
      catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY PROFILES]')
      }
    }

    async function getCommunityRoutinesByCommunity(communityId) {
      try {
        await communitiesService.getCommunityRoutinesByCommunity(communityId)
      }
      catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY ROUTINES BY COMMUNITY]')
      }
    }

    async function getComments(communityId) {
      try {
        await commentsService.getComments(communityId)
      }
      catch (error) {
        Pop.error(error.message)
      }
    }

    return {
      editable,
      route,
      account: computed(() => AppState.account),
      profiles: computed(() => AppState.communityProfiles.sort((a, b) => b.points - a.points)),
      communityRoutines: computed(() => AppState.communityRoutines),
      comments: computed(() => AppState.comments),
      wantsTour: computed(() => AppState.wantsTour),

      steps: [
        {
          target: '.v-step-11',  // We're using document.querySelector() under the hood
          header: {
            title: 'Leaderboard'
          },
          content: `See the top earners of each community!`,
          params: {
            enableScrolling: false,
            placement: 'bottom'
          }
        },
        {
          target: '.v-step-12',
          content: 'Add pre-made routines from each community!',
          params: {
            enableScrolling: true,
            placement: 'bottom'
          }
        },
        {
          target: '.v-step-13',
          header: {
            title: 'Chat with members of your community!'
          },
          content: 'NOTE: You can only chat with your community members but view the chat of other communities.',
          params: {
            enableScrolling: false,
            placement: 'top'
          }
        }
      ],

      callbacks: {
        onFinish: (() => {
          AppState.wantsTour = false
          accountService.updateAccount({ needsTour: false })
        }),
        onSkip: (() => {
          AppState.wantsTour = false
          accountService.updateAccount({ needsTour: false })
        })
      },

      handleSubmit() {
        if (editable.value.id) {
          this.editComment()
        } else {
          this.createComment()
        }
        editable.value = {}
      },

      async createComment() {
        try {
          editable.value.community = route.params.communityId
          await commentsService.createComment(editable.value)
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
  components: { CommentComponent, RoutineComponent }
}
</script>

<style lang="scss" scoped></style>