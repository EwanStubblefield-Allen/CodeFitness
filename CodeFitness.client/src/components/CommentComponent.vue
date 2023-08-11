<template>
  <div class="card elevation-5 background-light">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <router-link :to="{ name: 'Profile', params: { profileId: commentProp.accountId } }">
          <img class="profile-pic m-3" :src="commentProp.profile.picture" :alt="commentProp.profile.name">
        </router-link>
        <div>
          <p class="fw-bold pb-2">{{ commentProp.profile.name }}</p>
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
            <div @click="editComment()" class="list-group-item dropdown-item list-group-item-action">
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

    <p class="mx-3 mb-2">{{ commentProp.body }}</p>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed } from 'vue'
import { commentsService } from '../services/CommentsService.js'
import Pop from '../utils/Pop.js'

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
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>