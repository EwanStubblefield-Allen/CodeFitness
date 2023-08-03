<template>
  <div @click="selectCommunityOne()" class="col-2 bg-neutral-light my-4 p-3 text-center selectable">
    <p>Cardio Kings</p>
    <p class="pt-3">Global Points: 0</p>
  </div>
  <div @click="selectCommunityTwo()" class=" col-2 bg-neutral-light my-4 p-3 text-center selectable">
    <p>Weight Warriors</p>
    <p class="pt-3">Global Points: 0</p>
  </div>
  <div @click="selectCommunityThree()" class=" col-2 bg-neutral-light my-4 p-3 text-center selectable">
    <p>Legion of Leisure</p>
    <p class="pt-3">Global Points: 0</p>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue'
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { accountService } from "../services/AccountService.js"

export default {
  setup() {
    onMounted(() => {

    })

    return {
      async selectCommunityOne() {
        try {
          await accountService.selectCommunityOne()
        } catch (error) {
          Pop.error(error.message)
        }
      },

      async selectCommunityTwo() {
        try {
          await accountService.selectCommunityTwo()
        } catch (error) {
          Pop.error(error.message)
        }
      },

      async selectCommunityThree() {
        try {
          await accountService.selectCommunityThree()
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>