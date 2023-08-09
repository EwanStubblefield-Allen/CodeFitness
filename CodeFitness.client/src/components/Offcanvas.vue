<template>
  <!-- SECTION Off Canvas -->
  <div class="offcanvas offcanvas-start bg-neutral-dark text-light offcanvas-width" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <slot name="title"></slot>
      </h5>
      <button type="button" class="btn mdi mdi-close text-reset fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body container-fluid">
      <section class="row justify-content-center">
        <slot name="body"></slot>
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
  @media screen and (min-width: 768px) {
    .offcanvas-width {
      max-width: 16.7vw;
    }
  }
</style>