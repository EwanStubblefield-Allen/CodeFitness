<template>
  <form @submit.prevent="createRoutine()">
    <div class="form-group pb-2">
      <label for="title">Routine Name</label>
      <input v-model="editable.title" id="title" class="form-control" type="text" minlength="1" maxlength="50"
        placeholder="Routine..." required>
    </div>
    <div class="form-group py-2">
      <label for="picture">Picture</label>
      <input v-model="editable.picture" id="picture" class="form-control" type="url" minlength="10" maxlength="300"
        placeholder="Image..." required>
    </div>
    <div class="form-group py-2">
      <label for="description">Description</label>
      <input v-model="editable.description" id="description" class="form-control" type="text" minlength="5"
        maxlength="1000" placeholder="Description..." required>
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

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createRoutine() {
        try {
          await routinesService.createRoutine(editable.value)
        } catch (error) {
          Pop.error(error.message)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>