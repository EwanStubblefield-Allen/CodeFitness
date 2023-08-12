<template>
  <section class="row justify-content-center py-3">
    <div class="col-12 col-md-9 d-flex text-dark align-items-center justify-content-between">
      <div class="pe-3 fs-3">
        <slot></slot>
      </div>

      <div v-if="routinesProp.length > 3">
        <div v-if="showAmount == 3">
          <button @click="showAmount = routinesProp.length" class="btn btn-action">
            See more
            <i class="mdi mdi-plus-thick"></i>
          </button>
        </div>
        <div v-else>
          <button @click="showAmount = 3" class="btn btn-action">
            See less
            <i class="mdi mdi-minus-thick"></i>
          </button>
        </div>
      </div>

    </div>
  </section>

  <section class="row justify-content-center text-break">
    <div class="col-12 col-md-9">
      <section v-if="account.id && (routinesProp.length >= 3)" class="row">
        <div v-for="r in showAmount" :key="r" class="col-12 col-md-4 pb-3">
          <div class="routine-bg rounded">
            <img :src="routinesProp[r - 1].picture" @error="randomRoutineImg()" alt="Routine Image" class="img-fluid routine-pic rounded-top">
            <div class="routine-details p-2">
              <h5 class="p-2 text-center"> {{ routinesProp[r - 1].title }}</h5>

              <p class="p-2 mb-2">{{ routinesProp[r - 1].description }}</p>
              <div class="text-end">
                <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: routinesProp[r - 1].id } }">
                  <button @click="getRoutineById(routinesProp[r - 1].id)" class="btn btn-action" type="button">Start
                    Routine</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-else class="row">
        <div v-for="r in routinesProp" :key="r.id" class="col-12 col-md-4 pb-3">
          <div class="routine-bg rounded">
            <img :src="r.picture" @error="randomRoutineImg()" :alt="r.title" class="img-fluid routine-pic rounded-top w-100">
            <div class="routine-details p-2">
              <h5 class="p-2 text-center"> {{ r.title }}</h5>
              <p class="p-2 mb-2">{{ r.description }}</p>
              <div v-if="r.activities && account.id == r.accountId" class="text-end">
                <RouterLink :to="{ name: 'ActiveRoutine', params: { routineId: r.id } }">
                  <button class="btn btn-action" type="button">Start Routine</button>
                </RouterLink>
              </div>
              <div v-else class="text-end">
                <button @click="setActiveRoutine(r)" class="btn btn-action" type="button">Routine Details</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, ref } from 'vue'
import { routinesService } from '../services/RoutinesService.js'
import { Modal } from 'bootstrap'

export default {
  props: {
    routinesProp: {
      type: Array,
      required: true
    }
  },

  setup() {
    const showAmount = ref(3)

    return {
      showAmount,
      account: computed(() => AppState.account),

      async setActiveRoutine(routineData) {
        await routinesService.setActiveRoutine(routineData)
        Modal.getOrCreateInstance('#activeRoutine').show()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .routine-pic {
    background-image: v-bind(picture);
    object-fit: cover;
    object-position: center;
    height: 30vh;
  }

  .routine-details {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 16px 16px;
    /* border-bottom: 1px solid black; */
    backdrop-filter: blur(13.6px);
    -webkit-backdrop-filter: blur(13.6px);
  }
</style>