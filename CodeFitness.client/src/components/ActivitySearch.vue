<template>
  <div class="col-12 d-flex flex-column flex-md-row justify-content-between p-3">
    <form @submit.prevent="resetPage()">
      <div class="form-group d-flex align-items-center">
        <label for="search" class="fw-bold w-100">Search for activity:</label>
        <div class="input-group">
          <input v-model="editable" id="search" class="form-control" type="text" minlength="3" maxlength="50" placeholder="Activity..." required>
          <button type="submit" class="input-group-text" id="comment" title="Post Comment"><i class="mdi mdi-magnify"></i></button>
        </div>
      </div>
    </form>
    <div class="text-end">
      <button @click="editable = ''" class="btn btn-action" type="button" data-bs-toggle="modal" data-bs-target="#filterForm">Filter Activities</button>
    </div>
  </div>
  <div v-for="a in activities" :key="a.id" class="col-12 col-md-4 col-lg-3 p-3">
    <ActivityCard :activityProp="a" />
  </div>
  <section class="row justify-content-center my-3">
    <div class="col-10 d-flex justify-content-between no-select">
      <div @click="changePage(page - 20)" :class="{ disabled: page == 0, 'text-secondary': page == 0 }" class="d-flex selectable py-1 px-3">
        <i class="mdi mdi-arrow-left pe-3"></i>
        <p>Last Page</p>
      </div>
      <div @click="changePage(page + 20)" :class="{ disabled: !nextPage, 'text-secondary': !nextPage }" class="d-flex selectable py-1 px-3">
        <p>Next Page</p>
        <i class="mdi mdi-arrow-right ps-3"></i>
      </div>
    </div>
  </section>
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

    // onMounted(() => {
    //   getActivitiesBySearch('')
    // })

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

      activities: computed(() => AppState.activities),
      page: computed(() => AppState.page),
      nextPage: computed(() => AppState.nextPage),

      changePage(page) {
        AppState.page = page
        getActivitiesBySearch()
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