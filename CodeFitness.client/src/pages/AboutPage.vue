<template>
  <div class="col-10 bg-neutral-dark">
    <section class="row justify-content-center">
      <div class="col-11 fs-1 p-0 d-flex justify-content-center text-light my-3">
        <section v-if="selectedDev == 0" class="row reserved-space d-flex justify-content-center flex-grow-1">
          <div class="text-center fs-1 p-5">
            Select your developer!
          </div>
        </section>

        <section v-if="selectedDev == 1" class="row reserved-space">
          <h1 class="col-4  d-flex flex-column justify-content-between fs-3 mb-0 ewan-space">
            <div>Ewan</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Major contributions: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              incidunt!</p>
            <a href="" class="mdi mdi-linkedin fs-3" target="_blank"> Username</a>
            <a href="" class="mdi mdi-github fs-3" target="_blank"> Username</a>
          </h2>
        </section>

        <section v-if="selectedDev == 2" class="row reserved-space">
          <h1 class="col-4  d-flex flex-column justify-content-between fs-3 mb-0 faith-space">
            <div>Faith</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Major contributions: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              incidunt!</p>
            <a href="" class="mdi mdi-linkedin fs-3" target="_blank"> Username</a>
            <a href="" class="mdi mdi-github fs-3" target="_blank"> Username</a>
          </h2>
        </section>

        <section v-if="selectedDev == 3" class="row reserved-space">
          <h1 class="col-4  d-flex flex-column justify-content-between fs-3 mb-0 jasper-space ">
            <div>Jasper</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Major contributions: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              incidunt!</p>
            <a href="https://linkedin.com/in/jasper-delight-a00771122" class="mdi mdi-linkedin fs-3" target="_blank">
              Jasper Delight</a>
            <a href="https://github.com/Jasperdelight" class="mdi mdi-github fs-3" target="_blank">Jasperdelight</a>
          </h2>
        </section>

        <section v-if="selectedDev == 4" class="row reserved-space">
          <h1 class="col-4  d-flex flex-column justify-content-between fs-3 mb-0 josh-space">
            <div>Josh</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Major contributions: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              incidunt!</p>
            <a href="" class="mdi mdi-linkedin fs-3" target="_blank"> Username</a>
            <a href="" class="mdi mdi-github fs-3" target="_blank"> Username</a>
          </h2>
        </section>

        <section v-if="selectedDev == 5" class="row reserved-space">
          <h1 class="col-4  d-flex flex-column justify-content-between fs-3 mb-0 kyle-space">
            <div>Kyle Peppersack</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Major contributions: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              incidunt!</p>
            <a href="http://linkedin.com/in/kyle-peppersack-a39025285" class="mdi mdi-linkedin fs-3" target="_blank"> Kyle
              Peppersack</a>
            <a href="https://github.com/KylePep" class="mdi mdi-github fs-3" target="_blank"> KylePep</a>
          </h2>
        </section>
      </div>
    </section>

    <section class="row">
      <div class=" col-12  d-flex flex-column flex-md-row justify-content-around dev-select ">
        <div style="background-image: url('src/assets/img/ewan-icon.jpg'); "
          class=" icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1"
          @click="selectedDev = 1">
          <p class="fs-1">Ewan</p>
          <!-- <img src="src/assets/img/ewan-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/faith-icon.jpg');"
          class=" icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1"
          @click="selectedDev = 2">
          <p class="fs-1">Faith</p>
          <!-- <img src="../assets/img/faith-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/jasper-icon.jpg');"
          class=" icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1"
          @click="selectedDev = 3">
          <p class="fs-1">Jasper</p>
          <!-- <img src="src/assets/img/jasper-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/josh-icon.jpg');"
          class=" icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1"
          @click="selectedDev = 4">
          <p class="fs-1">Josh</p>
          <!-- <img src="src/assets/img/josh-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/Kyle-icon.jpg');"
          class=" icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1"
          @click="selectedDev = 5">
          <p class="fs-1">Kyle</p>
          <!-- <img src="../assets/img/Kyle-icon.jpg" alt=""> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from "vue"

export default {
  setup() {
    const selectedDev = ref({})

    onMounted(() =>
      selectedDev.value = 0
    )

    return {
      selectedDev
    }
  }
}
</script>

<style lang="scss" scoped>
.reserved-space h1 {
  background-size: cover;
  background-repeat: no-repeat;

  text-shadow: 2px 2px black;
  border-bottom: solid 2px #ffffff;
  border-left: solid 2px #ffffff;
  border-top: solid 2px #ffffff;
}

.reserved-space h2 {
  border: thick double #ffffff;
}

.ewan-space {
  background-image: url('src/assets/img/ewan-bg.jpg');
}

.faith-space {
  background-image: url('src/assets/img/faith-bg.jpg');
  background-position: top;
}

.jasper-space {
  background-image: url('src/assets/img/jasper-bg.jpg');
  background-position: top;
}

.josh-space {
  background-image: url('src/assets/img/josh-bg.jpg');
  background-position: top;
}

.kyle-space {
  background-image: url('src/assets/img/kyle-bg.jpg');
  background-position: right top;
}

.icon-space {
  height: 30vh;
  background-position: center;
  background-size: cover;
}

.icon-space p {
  color: #ffffff;
  text-shadow: 2px 2px black;
}

.icon-space p:hover {
  font-size: 100px;
}

.reserved-space {
  height: 55vh;
  background-image: linear-gradient(#4496b6, #2e728d, #10313e);
}

.reserved-space a {
  color: white;
}

.dev-select {
  background-color: var(--neutral-light);
  text-align: center;
  padding-top: 10vh;
  padding-bottom: 10vh;

}

.dev-select img {
  height: 10vh;
  width: 10vh;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

.dev-select img:hover {
  scale: 1.05;
}
</style>