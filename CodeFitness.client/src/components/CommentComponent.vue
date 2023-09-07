<template>
  <div class="card elevation-5 background-light">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <router-link :to="{ name: 'Profile', params: { profileId: commentProp.accountId } }">
          <img class="profile-pic m-3" :src="commentProp.profile.picture" :alt="commentProp.profile.name">
        </router-link>

        <div>
          <div class="d-flex">
            <p class="fw-bold pb-2">{{ commentProp.profile.name }}</p>
            <p v-if="commentProp.updatedAt != commentProp.createdAt" class="text-neutral px-3">edited</p>
          </div>

          <div class="text-secondary">
            <p>{{ commentProp.createdAt }}</p>
          </div>
        </div>
      </div>

      <div v-if="account.id == commentProp.accountId" class="dropdown p-3">
        <div type="button" class="selectable no-select" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-dots-horizontal fs-5"></i>
        </div>
        <div class="dropdown-menu dropdown-menu-end p-0" aria-labelledby="authDropdown">
          <div class="list-group">
            <div @click="editComment()" class="list-group-item dropdown-item list-group-item-action selectable">
              <i class="mdi mdi-pencil blue"></i>
              Edit
            </div>
            <div @click="removeComment()" class="list-group-item dropdown-item list-group-item-action text-danger selectable">
              <i class="mdi mdi-trash-can"></i>
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-end px-3 pb-2 fs-5">
      <p class="text-break pe-3 selectable" data-bs-toggle="collapse" :data-bs-target="`#${commentProp.id}Emotes`" >{{ commentProp.body }}</p>

      <div class="d-flex">
        <p v-if="commentProp.emotes.length" class="pe-1" >{{ commentProp.emotes.length }}</p>
        <p v-else class="pe-1">0</p>

        <i v-if="emoted" @click="createEmote()" class="mdi mdi-comment selectable"></i>
        <i v-else-if="account.id != commentProp.accountId && account.community == commentProp.community" class="mdi mdi-comment selectable" data-bs-toggle="collapse" :data-bs-target="`#${commentProp.id}`"></i>
        <i v-else class="mdi mdi-comment"></i>
      </div>

    </div>
  </div>
  <div class="collapse" :id="`${commentProp.id}Emotes`">
    <div class="card card-body px-2 bg-neutral-light">
      <div v-for="emote in commentProp.emotes" :key="emote.id">
        <img class="img-fluid" :src="emote.emote" :alt="emote.emote" :title="emote.profile.name">
      </div>
    </div>
  </div>
  <div class="collapse" :id="commentProp.id">
    <div class="card card-body px-2 bg-neutral-light">
      <div v-for="achievement in achievement" :key="achievement.id">
        <div class="d-flex justify-content-between py-1">
          <div v-for="tier in achievement.achievementTier" :key="tier.id" @click="createEmote(tier.picture)" class="selectable">
            <img v-if="achievement.tier >= tier.tier" class="img-fluid" :src="tier.picture" :alt="tier.name" :title="tier.name">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { commentsService } from '../services/CommentsService.js'
import { emotesService } from '../services/EmotesService.js'
import Pop from '../utils/Pop.js'
import { Collapse } from 'bootstrap'

export default {
  props: {
    commentProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      achievement: computed(() => AppState.activeAchievements),
      emoted: computed(() => {
        let temp = false
        props.commentProp.emotes.forEach(e => {
          if (e.accountId == AppState.account.id) {
            temp = true
          }
        })
        return temp
      }),

      editComment() {
        AppState.activeComment = props.commentProp
      },

      async removeComment() {
        try {
          const isSure = await Pop.confirm('Are you sure you want to delete this comment?')

          if (!isSure) {
            return
          }
          await commentsService.removeComment(props.commentProp.id)
        } catch (error) {
          Pop.error(error.message, '[REMOVING COMMENT]')
        }
      },

      async createEmote(emote) {
        const emoteData = {}
        emoteData.emote = emote
        emoteData.commentId = props.commentProp.id
        await emotesService.createEmote(emoteData)
        Collapse.getOrCreateInstance(`#${props.commentProp.id}`).hide()
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>