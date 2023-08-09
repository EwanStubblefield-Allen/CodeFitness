<template>
  <div>
    <div class="image-container">
      <img src="https://freesvg.org/img/Male-Musculature.png" alt="">
      <div class="circle-overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .image-container {
    position: relative;
    display: inline-block;
  }

  .image-container img {
    display: block;
    width: 100%;
    height: auto;
  }

  .circle-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(135, 206, 250, 0.5);
    pointer-events: none;
  }
</style>