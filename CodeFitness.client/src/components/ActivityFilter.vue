<template>
  <form @submit.prevent="getActivities()" class="row p-3">
    <p class="col-12 fw-bold">Body Group:</p>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="abs" value="abdominals">
      <label class="form-check-label" for="abs">Abs</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="innerThigh" value="abductors">
      <label class="form-check-label" for="innerThigh">Inner Thigh</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="biceps" value="biceps">
      <label class="form-check-label" for="biceps">Biceps</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="calves" value="calves">
      <label class="form-check-label" for="calves">Calves</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="chest" value="chest">
      <label class="form-check-label" for="chest">Chest</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="forearms" value="forearms">
      <label class="form-check-label" for="forearms">Forearms</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="glutes" value="glutes">
      <label class="form-check-label" for="glutes">Glutes</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="hamstrings" value="hamstrings">
      <label class="form-check-label" for="hamstrings">Hamstrings</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="lats" value="lats">
      <label class="form-check-label" for="lats">Lats</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="lowerBack" value="lower_back">
      <label class="form-check-label" for="lowerBack">Lower Back</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="middleBack" value="middle_back">
      <label class="form-check-label" for="middleBack">Middle Back</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="neck" value="neck">
      <label class="form-check-label" for="neck">Neck</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="quads" value="quadriceps">
      <label class="form-check-label" for="quads">Quads</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="traps" value="traps">
      <label class="form-check-label" for="traps">Traps</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" class="form-check-input" type="radio" name="muscle" id="triceps" value="triceps">
      <label class="form-check-label" for="triceps">Triceps</label>
    </div>
    <p class="col-12 pt-2 fw-bold">Type:</p>
    <div class="col-4 form-check">
      <input v-model="adaptable" class="form-check-input" type="radio" name="type" id="cardio" value="cardio">
      <label class="form-check-label" for="cardio">Cardio</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" class="form-check-input" type="radio" name="type" id="weightlifting" value="olympic_weightlifting">
      <label class="form-check-label" for="weightlifting">Weightlifting</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" class="form-check-input" type="radio" name="type" id="plyometrics" value="plyometrics">
      <label class="form-check-label" for="plyometrics">High Intensity</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" class="form-check-input" type="radio" name="type" id="powerLifting" value="powerlifting">
      <label class="form-check-label" for="powerLifting">Power Lifting</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" class="form-check-input" type="radio" name="type" id="strength" value="strength">
      <label class="form-check-label" for="strength">Strength</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" class="form-check-input" type="radio" name="type" id="stretching" value="stretching">
      <label class="form-check-label" for="stretching">Stretching</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" class="form-check-input" type="radio" name="type" id="strongman" value="strongman">
      <label class="form-check-label" for="strongman">Strongman</label>
    </div>
    <p class="col-12 pt-2 fw-bold">Difficulty:</p>
    <div class="form-check">
      <input v-model="difficulty" class="form-check-input" type="radio" name="difficulty" id="beginner" value="beginner">
      <label class="form-check-label" for="beginner">
        Beginner
      </label>
    </div>
    <div class="form-check">
      <input v-model="difficulty" class="form-check-input" type="radio" name="difficulty" id="intermediate" value="intermediate">
      <label class="form-check-label" for="intermediate">
        Intermediate
      </label>
    </div>
    <div class="form-check">
      <input v-model="difficulty" class="form-check-input" type="radio" name="difficulty" id="expert" value="expert">
      <label class="form-check-label" for="expert">
        Expert
      </label>
    </div>
    <div class="text-end">
      <button @click="resetTemplate()" class="btn btn-secondary mx-3" type="reset">Reset</button>
      <button class="btn btn-success" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted, ref } from 'vue'
import { activitiesService } from '../services/ActivitiesService.js'
import { Modal } from 'bootstrap'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const editable = ref('')
    const adaptable = ref('')
    const difficulty = ref('')

    onMounted(() => {

    })

    return {
      editable,
      adaptable,
      difficulty,

      resetTemplate() {
        activitiesService.resetTemplate()
        editable.value = ''
        adaptable.value = ''
        difficulty.value = ''
      },

      async getActivities() {
        try {
          await activitiesService.getActivities('', editable.value, adaptable.value, difficulty.value)
          Modal.getOrCreateInstance('#filterForm').hide()
        } catch (error) {
          Pop.error(error.message, '[GETTING ACTIVITIES BY FILTER]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>