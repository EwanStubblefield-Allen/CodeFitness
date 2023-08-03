<template>
  <form @submit.prevent="editAccount()">
    <div class="form-group pb-2">
      <label for="bio">Edit Bio</label>
      <input v-model="editable.bio" id="bio" class="form-control" type="text" minlength="1" maxlength="50" placeholder="Bio..." required>
    </div>
    <div class="form-group py-2">
      <label for="picture">Picture</label>
      <input v-model="editable.picture" id="picture" class="form-control" type="url" minlength="10" maxlength="300" placeholder="Image..." required>
    </div>
    <div class="form-group py-2">
      <label for="coverImg">CoverImg</label>
      <input v-model="editable.coverImg" id="coverImg" class="form-control" type="text" minlength="10" maxlength="1000" placeholder="CoverImg..." required>
    </div>
    <div class="text-end">
      <button class="btn btn-info mt-2" type="submit">Create</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue"
import { routinesService } from "../services/RoutinesService.js"
import Pop from "../utils/Pop.js"
import { accountService } from "../services/AccountService"

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async editAccount() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>