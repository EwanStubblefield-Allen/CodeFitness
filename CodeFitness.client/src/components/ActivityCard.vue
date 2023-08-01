<template>
  <div :class="{ 'activityProp.image': 'image-bg' }" class="d-flex flex-column justify-content-center align-items-center bg-neutral-dark text-light p-3 activity-card">
    <p class="fw-bold py-2">{{ activityProp.name }}</p>
    <p>Category: {{ activityProp.category }}</p>
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
      imageBackground: computed(() => `url('${props.activityProp.image}')`)
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