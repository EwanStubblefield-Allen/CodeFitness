<template>
  <section class="row justify-content-around pt-3 text-center">

    <div @click="getActivities('cardio')"
      class="col-1 border border-light flex-grow-1 bg-action selectable py-2 rounded-start">Cardio</div>
    <div @click="getActivities('olympic_weightlifting')"
      class="col-1 border border-light flex-grow-1 bg-action selectable py-2">Weightlifting</div>
    <div @click="getActivities('plyometrics')" class="col-1 border border-light flex-grow-1 bg-action selectable py-2">
      High Intensity</div>
    <div @click="getActivities('powerlifting')" class="col-1 border border-light flex-grow-1 bg-action selectable py-2">
      Power Lifting</div>
    <div @click="getActivities('strength')" class="col-1 border border-light flex-grow-1 bg-action selectable py-2">
      Strength</div>
    <div @click="getActivities('stretching')" class="col-1 border border-light flex-grow-1 bg-action selectable py-2">
      Stretching</div>
    <div @click="getActivities('strongman')"
      class="col-1 border border-light flex-grow-1 bg-action selectable py-2 rounded-end">Strongman</div>

  </section>
  <div class="col-12 d-flex flex-column flex-lg-row justify-content-between p-3">
    <form @submit.prevent="resetPage()" id="form">
      <div class="form-group d-flex align-items-center">
        <label for="search" class="fw-bold w-100">Search for activity:</label>
        <div class="input-group">
          <input v-model="editable" id="search" class="form-control" type="text" minlength="3" maxlength="50"
            placeholder="Activity..." required>
          <button type="submit" class="input-group-text" id="comment" title="Post Comment"><i
              class="mdi mdi-magnify"></i></button>
        </div>
      </div>
    </form>
    <div class="text-end">
      <button @click="editable = ''" class="btn btn-action my-2" type="button" data-bs-toggle="modal"
        data-bs-target="#filterForm">Filter by Muscle</button>
    </div>
  </div>
  <div v-for="a in activities" :key="a.id" class="col-12 col-md-4 col-lg-3 p-3">
    <ActivityCard :activityProp="a" />
  </div>
  <div class="col-10 d-flex justify-content-between no-select my-3">
    <div @click="changePage(page - 20)" :class="{ disabled: page == 0, 'text-secondary': page == 0 }"
      class="d-flex align-items-center selectable py-1 px-3">
      <i class="mdi mdi-arrow-left pe-3"></i>
      <p class="text-end">Last Page</p>
    </div>
    <div @click="changePage(page + 20)" :class="{ disabled: !nextPage, 'text-secondary': !nextPage }"
      class="d-flex align-items-center selectable py-1 px-3">
      <p>Next Page</p>
      <i class="mdi mdi-arrow-right ps-3"></i>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { activitiesService } from '../services/ActivitiesService.js'
import { computed, onMounted, ref } from 'vue'
import ActivityCard from './ActivityCard.vue'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const editable = ref('')
    const adaptable = ref('')

    onMounted(() => {
      getActivitiesBySearch('')
    })

    async function getActivitiesBySearch(template) {
      try {
        await activitiesService.getActivities(template)
      }
      catch (error) {
        Pop.error(error.message, '[GETTING ACTIVITIES BY SEARCH]')
      }
    }

    return {
      editable,
      adaptable,
      activities: computed(() => AppState.activities),
      page: computed(() => AppState.page),
      nextPage: computed(() => AppState.nextPage),

      async getActivities(type) {
        try {
          AppState.page = 0
          await activitiesService.getActivities(`type=${type}`)
          adaptable.value = ''
        }
        catch (error) {
          Pop.error(error.message, '[GETTING ACTIVITIES BY FILTER]')
        }
      },

      changePage(page) {
        AppState.page = page
        getActivitiesBySearch()
        document.getElementById('form').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
      },

      resetPage() {
        AppState.page = 0
        getActivitiesBySearch(`name=${editable.value.replace(/s+$/, '')}`)
      }
    }
  },
  components: { ActivityCard }
}
</script>

<style lang="scss" scoped></style>