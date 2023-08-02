<template>
  <form @submit.prevent="createRoutine()">
    <label for="title">
      Routine Name
    </label>
    <input type="text" placeholder="Routine..." id="title" v-model="editable.title" minlength="1" maxlength="50">
    <label for="picture">Picture</label>
    <input type="url" placeholder="Image..." id="picture" v-model="editable.picture" minlength="10" maxlength="300">
    <label for="description">Description</label>
    <input type="text" placeholder="Description..." id="description" v-model="editable.description" minlength="10"
      maxlength="1000">
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { ref } from "vue"
import Pop from "../utils/Pop.js"
import { routinesService } from "../services/RoutinesService.js"

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