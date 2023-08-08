<template>
  <div v-if="routine" class="col-12 col-md-10 offset-md-2 bg-dark">
    <section class="row justify-content-center bg-neutral-dark">
      <div class="col-12 p-3">
        <div class="fs-1 text-center text-white">{{ routine.title }}</div>

        <section class="row justify-content-around text-center my-4">
          <div class="col-2 bg-light">
            <div v-if="current > 0" class="d-flex flex-column justify-content-around h-100">
              <p class="fs-5 fw-bold">{{ routine.activities[current - 1].name }}</p>
              <p>{{ routine.activities[current - 1].muscle }}</p>
              <p>{{ routine.activities[current - 1].difficulty }}</p>
            </div>
          </div>

          <div class="col-6 bg-light p-3">
            <div v-if="current < routine.activities.length">
              <p class="fs-5 fw-bold">{{ routine.activities[current].name }}</p>
              <p>Reps: 10 <span> Sets: 2</span></p>
              <p>Equipment: {{ routine.activities[current].equipment }}</p>
              <p>Instructions:{{ routine.activities[current].instructions }}</p>
            </div>
            <div v-else>
              <p>Finish</p>
            </div>

            <div class="d-flex justify-content-between pt-3">
              <button @click="changeActivity(-1)" class="btn btn-action" :disabled="current == 0">Back</button>
              <button v-if="current == routine.activities.length" @click="awardPoints()" class="btn btn-action">Finish</button>
              <button v-else @click="changeActivity(1)" class="btn btn-action">Next</button>
            </div>
          </div>

          <div class="col-2 bg-light">
            <div v-if="current < routine.activities.length - 1" class="d-flex flex-column justify-content-around h-100">
              <p class="fs-5 fw-bold">{{ routine.activities[current + 1].name }}</p>
              <p>{{ routine.activities[current + 1].muscle }}</p>
              <p>{{ routine.activities[current + 1].difficulty }}</p>
            </div>
          </div>
        </section>

        <form @submit.prevent="" class="row justify-content-around">
          <div v-for="a in routine.activities" :key="a.id" class="col-5 form-check">
            <input v-model="editable[a.id]" class="fs-5 form-check-input" type="checkbox" :id="a.id">
            <label class="fs-5 form-check-label" :for="a.id">
              {{ a.name }}
            </label>
          </div>
          <div class="text-end p-3">
            <button @click="current = 0; editable = {}" class="btn btn-danger" type="reset">Restart</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue"
import { useRoute, useRouter } from "vue-router"
import { AppState } from "../AppState"
import { accountService } from "../services/AccountService"
import { routinesService } from "../services/RoutinesService.js"
import Pop from "../utils/Pop"
import { Modal } from "bootstrap"

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const editable = ref({})
    let current = ref(0)

    watchEffect(() => {
      getRoutineById()
    })

    async function getRoutineById() {
      try {
        await routinesService.getRoutineById(route.params.routineId)
      } catch (error) {
        Pop.error(error.message, '[GETTING ROUTINE BY ID]')
      }
    }

    return {
      editable,
      current,
      routine: computed(() => AppState.activeRoutine),

      toggleActivity(activity) {
        activity.checked = !activity.checked
      },

      changeActivity(change) {
        if (change == 1) {
          editable.value[this.routine.activities[current.value].id] = true
        } else {
          editable.value[this.routine.activities[current.value - 1].id] = false
        }
        current.value += change
      },

      async awardPoints() {
        try {
          const isDone = await Pop.confirm('Finish Routine')

          if (!isDone) {
            return
          }
          await accountService.updateAccountPoints(10)
          current.value = 0
          Pop.success(`10 Points Awarded!`)
          router.push({ name: 'Routines', params: { routineId: this.routine.id } })
        } catch (error) {
          Pop.error(error.message, '[UPDATING ACCOUNT POINTS]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>