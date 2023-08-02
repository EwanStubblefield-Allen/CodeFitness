<template>
  <div class="d-flex flex-column justify-content-center text-center p-3 bg-neutral-dark activity-card">
    <p class="fw-bold py-2">{{ activityProp.name }}</p>
    <p v-if="activityProp.category">Category: {{ activityProp.category }}</p>
    <p>Muscles: {{ activityProp.muscle.charAt(0).toUpperCase() + activityProp.muscle.slice(1) }}</p>
    <p>Type: {{ activityProp.type.charAt(0).toUpperCase() + activityProp.type.slice(1) }}</p>
    <p>Equipment: {{ activityProp.equipment.charAt(0).toUpperCase() + activityProp.equipment.slice(1).replace('_', ' ') }}</p>
    <p>difficulty: {{ activityProp.difficulty.charAt(0).toUpperCase() + activityProp.difficulty.slice(1) }}</p>
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