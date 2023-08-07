<template>
  <!-- SECTION Off Canvas -->
  <div class="offcanvas offcanvas-start  text-light offcanvas-width top-margin" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-body container-fluid bg-neutral-dark ">
      <section class="row justify-content-center">
        <slot></slot>
      </section>
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

<style lang="scss" scoped>
  .top-margin {
    margin-top: 80px;
  }

  @media screen and (min-width: 768px) {
    .offcanvas-width {
      max-width: 16.7vw;
    }
  }
</style>