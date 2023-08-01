<template>
  <form @submit.prevent="getActivitiesByFilter()" class="row">
    <p class="col-12 fw-bold">Body Group:</p>
    <div class="col-4 form-check">
      <input v-model="editable" value="1" type="checkbox" class="form-check-input" id="biceps">
      <label class="form-check-label" for="biceps">Biceps</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="2" type="checkbox" class="form-check-input" id="shoulder">
      <label class="form-check-label" for="shoulder">Shoulder</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="3" type="checkbox" class="form-check-input" id="back">
      <label class="form-check-label" for="back">Back</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="4" type="checkbox" class="form-check-input" id="chest">
      <label class="form-check-label" for="chest">Chest</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="5" type="checkbox" class="form-check-input" id="triceps">
      <label class="form-check-label" for="triceps">Triceps</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="6" type="checkbox" class="form-check-input" id="abs">
      <label class="form-check-label" for="abs">Abs</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="7" type="checkbox" class="form-check-input" id="calves">
      <label class="form-check-label" for="calves">Calves</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="8" type="checkbox" class="form-check-input" id="glutes">
      <label class="form-check-label" for="glutes">Glutes</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="9" type="checkbox" class="form-check-input" id="traps">
      <label class="form-check-label" for="traps">Traps</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="10" type="checkbox" class="form-check-input" id="quads">
      <label class="form-check-label" for="quads">Quads</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="11" type="checkbox" class="form-check-input" id="hamstrings">
      <label class="form-check-label" for="hamstrings">Hamstrings</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="12" type="checkbox" class="form-check-input" id="lats">
      <label class="form-check-label" for="lats">Lats</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="13" type="checkbox" class="form-check-input" id="forearms">
      <label class="form-check-label" for="forearms">Forearms</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="14" type="checkbox" class="form-check-input" id="obliques">
      <label class="form-check-label" for="obliques">Obliques</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="editable" value="15" type="checkbox" class="form-check-input" id="lowerCalves">
      <label class="form-check-label" for="lowerCalves">Lower Calves</label>
    </div>
    <p class="col-12 pt-2 fw-bold">Equipment:</p>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="1" type="checkbox" class="form-check-input" id="barbell">
      <label class="form-check-label" for="barbell">Barbell</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="2" type="checkbox" class="form-check-input" id="szBar">
      <label class="form-check-label" for="szBar">SZ-Bar</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="3" type="checkbox" class="form-check-input" id="dumbbell">
      <label class="form-check-label" for="dumbbell">Dumbbell</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="4" type="checkbox" class="form-check-input" id="gymMat">
      <label class="form-check-label" for="gymMat">Gym Mat</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="5" type="checkbox" class="form-check-input" id="swissBall">
      <label class="form-check-label" for="swissBall">Swiss Ball</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="6" type="checkbox" class="form-check-input" id="pullUpBar">
      <label class="form-check-label" for="pullUpBar">Pull-up Bar</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="7" type="checkbox" class="form-check-input" id="none">
      <label class="form-check-label" for="none">No Equipment</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="8" type="checkbox" class="form-check-input" id="bench">
      <label class="form-check-label" for="bench">Bench</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="9" type="checkbox" class="form-check-input" id="inclineBench">
      <label class="form-check-label" for="inclineBench">Incline Bench</label>
    </div>
    <div class="col-4 form-check">
      <input v-model="adaptable" value="10" type="checkbox" class="form-check-input" id="kettleBell">
      <label class="form-check-label" for="kettleBell">Kettle Bell</label>
    </div>
    <div class="text-end">
      <button class="btn btn-success" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted, ref } from 'vue'
import { activitiesService } from '../services/ActivitiesService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const editable = ref([])
    const adaptable = ref([])

    onMounted(() => {

    })

    return {
      editable,
      adaptable,

      async getActivitiesByFilter() {
        try {
          await activitiesService.getActivitiesByFilter(editable.value, adaptable.value)
        } catch (error) {
          Pop.error(error.message, '[GETTING ACTIVITIES BY FILTER]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>