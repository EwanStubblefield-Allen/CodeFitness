<template>
  <form @submit.prevent="handleSubmit()">
    <div class="form-group pb-2">
      <label for="title">Routine Name</label>
      <input v-model="editable.title" id="title" class="form-control" type="text" minlength="1" maxlength="50" placeholder="Routine..." required>
    </div>
    <div class="form-group py-2">
      <label for="picture">Picture</label>
      <input v-model="editable.picture" id="picture" class="form-control" type="url" minlength="10" maxlength="300" placeholder="Image..." required>
    </div>
    <div class="form-group py-2">
      <label for="description">Description</label>
      <textarea v-model="editable.description" id="description" class="form-control" type="text" minlength="10" maxlength="1000" rows="10" placeholder="Description..." required></textarea>
    </div>
    <div class="text-end">
      <button class="btn btn-action mt-2" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref, watchEffect } from "vue"
import { useRouter } from "vue-router"
import { routinesService } from "../services/RoutinesService.js"
import { Modal, Offcanvas } from "bootstrap"
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const router = useRouter()
    const editable = ref({})

    watchEffect(() => {
      if (AppState.isEditing) {
        editable.value = { ...AppState.activeRoutine }
      } else {
        editable.value = {}
      }
    })

    async function createRoutine() {
      try {
        const routine = await routinesService.createRoutine(editable.value)
        router.push({ name: 'Routines', params: { routineId: routine.id } })
      } catch (error) {
        Pop.error(error.message, '[CREATING ROUTINE]')
      }
    }

    async function updateRoutine() {
      try {
        await routinesService.updateRoutine(editable.value)
        Pop.success(`${AppState.activeRoutine.title} was updated!`)
      } catch (error) {
        Pop.error(error.message, '[UPDATING ROUTINE]')
      }
    }

    return {
      editable,

      handleSubmit() {
        if (editable.value.id) {
          updateRoutine()
        }
        else {
          createRoutine()
        }
        editable.value = {}
        Modal.getOrCreateInstance('#routineForm').hide()
        Offcanvas.getOrCreateInstance('#offcanvasRoutine').hide()
      }

    }
  }
}
</script>

<style lang="scss" scoped></style>