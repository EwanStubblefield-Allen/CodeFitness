<template>
  <form @submit.prevent="getActivities()" class="row p-3">
    <!-- MuscleMan -->
    <div>
<div class="image-container">

  <img src="https://freesvg.org/img/Male-Musculature.png" alt="">
  <div v-if="editable == 'abdominals'" class="abs-overlay"></div>
  <div v-if="editable == 'abductors'" class="innerThigh-overlay"></div>
  <div v-if="editable == 'biceps'" class="biceps-overlay"></div>
  <div v-if="editable == 'biceps'" class="bicepsTwo-overlay"></div>
  <div v-if="editable == 'calves'" class="calves-overlay"></div>
  <div v-if="editable == 'calves'" class="calvesTwo-overlay"></div>
  <div v-if="editable == 'chest'" class="chest-overlay"></div>
  <div v-if="editable == 'forearms'" class="forearms-overlay"></div>
  <div v-if="editable == 'forearms'" class="forearmsTwo-overlay"></div>
  <div v-if="editable == 'glutes'" class="glutes-overlay"></div>
  <div v-if="editable == 'hamstrings'" class="hamstrings-overlay"></div>
  <div v-if="editable == 'lats'" class="lats-overlay"></div>
  <div v-if="editable == 'lower_back'" class="lowerBack-overlay"></div>
  <div v-if="editable == 'middle_back'" class="middleBack-overlay"></div>
  <div v-if="editable == 'neck'" class="neck-overlay"></div>
  <div v-if="editable == 'quadriceps'" class="quads-overlay"></div>
  <div v-if="editable == 'traps'" class="traps-overlay"></div>
  <div v-if="editable == 'triceps'" class="triceps-overlay"></div>
  <div v-if="editable == 'triceps'" class="tricepsTwo-overlay"></div>
</div>
  </div>
  <!-- Activity Search -->
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
    <!-- <p class="col-12 pt-2 fw-bold">Difficulty:</p>
    <div class="form-check">
      <input v-model="difficulty" class="form-check-input" type="radio" name="difficulty" id="beginner" value="beginner">
      <label class="form-check-label" for="beginner">Beginner</label>
    </div>
    <div class="form-check">
      <input v-model="difficulty" class="form-check-input" type="radio" name="difficulty" id="intermediate" value="intermediate">
      <label class="form-check-label" for="intermediate">Intermediate</label>
    </div>
    <div class="form-check">
      <input v-model="difficulty" class="form-check-input" type="radio" name="difficulty" id="expert" value="expert">
      <label class="form-check-label" for="expert">Expert</label>
    </div> -->
    <div class="text-end">
      <button @click="resetTemplate()" class="btn btn-secondary mx-3" type="reset">Reset</button>
      <button class="btn btn-action" type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { activitiesService } from '../services/ActivitiesService.js'
import { Modal } from 'bootstrap'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import MuscleMan from "./MuscleMan.vue"

export default {
  setup() {
    const editable = ref('')
    const adaptable = ref('')
    return {
      editable,
      adaptable,
      resetTemplate() {
        editable.value = ''
        adaptable.value = ''
      },
      async getActivities() {
        try {
          AppState.page = 0
          await activitiesService.getActivities(`muscle=${editable.value}&type=${adaptable.value}`)
          Modal.getOrCreateInstance('#filterForm').hide()
          this.resetTemplate()
        }
        catch (error) {
          Pop.error(error.message, '[GETTING ACTIVITIES BY FILTER]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}

.abs-overlay {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 77px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.innerThigh-overlay {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.biceps-overlay {
  position: absolute;
  top: 30%;
  left: 62%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.bicepsTwo-overlay {
  position: absolute;
  top: 30%;
  left: 38%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.calves-overlay {
  position: absolute;
  top: 80%;
  left: 54%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.calvesTwo-overlay {
  position: absolute;
  top: 80%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.chest-overlay {
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.forearms-overlay {
  position: absolute;
  top: 40%;
  left: 65%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.forearmsTwo-overlay {
  position: absolute;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.glutes-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(231, 135, 250, 0.5);
  pointer-events: none;
}
.hamstrings-overlay {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(231, 135, 250, 0.5);
  pointer-events: none;
}
.lats-overlay {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.lowerBack-overlay {
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(231, 135, 250, 0.5);
  pointer-events: none;
}
.middleBack-overlay {
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(231, 135, 250, 0.5);
  pointer-events: none;
}
.neck-overlay {
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.quads-overlay {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.traps-overlay {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(135, 206, 250, 0.5);
  pointer-events: none;
}
.triceps-overlay {
  position: absolute;
  top: 30%;
  left: 62%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(231, 135, 250, 0.5);
  pointer-events: none;
}
.tricepsTwo-overlay {
  position: absolute;
  top: 30%;
  left: 38%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(231, 135, 250, 0.5);
  pointer-events: none;
}
</style>