<template>
  <div class="col-12 d-flex flex-column flex-md-row justify-content-between p-3">
    <form @submit.prevent="getActivitiesBySearch()">
      <div class="form-group d-flex align-items-center">
        <label for="search" class="fw-bold w-100">Search for activity:</label>
        <div class="input-group">
          <input v-model="editable.name" id="search" class="form-control" type="text" minlength="3" maxlength="50" placeholder="Activity..." required>
          <button type="submit" class="input-group-text" id="comment" title="Post Comment"><i class="mdi mdi-magnify"></i></button>
        </div>
      </div>
    </form>
    <div class="text-end">
      <button class="btn btn-action" type="button" data-bs-toggle="modal" data-bs-target="#filterForm">Filter</button>
    </div>
  </div>
  <div v-for="a in activities" :key="a.id" class="col-12 col-md-3 p-3">
    <ActivityCard :activityProp="a" />
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { activitiesService } from '../services/ActivitiesService.js'
import { computed, ref } from 'vue'
import ActivityCard from './ActivityCard.vue'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      activities: computed(() => AppState.activities),

      async getActivitiesBySearch() {
        try {
          await activitiesService.getActivities(editable.value.name)
        }
        catch (error) {
          Pop.error(error.message, '[GETTING ACTIVITIES BY SEARCH]')
        }
      }
    }
  },
  components: { ActivityCard }
}
</script>

<style lang="scss" scoped></style>