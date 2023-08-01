<template>
  <div class="d-flex flex-column justify-content-center text-center image-bg p-3 activity-card">
    <p class="fw-bold py-2">{{ activityProp.name }}</p>
    <p v-if="activityProp.category">Category: {{ activityProp.category }}</p>
    <div v-if="activityProp.description">
      {{ activityProp.description }}
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue'

export default {
  props: {
    activityProp: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    onMounted(() => {

    })

    return {
      imageBackground: computed(() => `url('https://wger.de/${props.activityProp.image}')`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-bg {
    background-image: v-bind(imageBackground);
    background-position: center;
    background-size: cover;
  }

  .activity-card {
    min-height: 40vh;
  }
</style>