<template>
  <div class="col-12 col-md-10 offset-md-2 bg-neutral-dark">
    <section class="row justify-content-center">
      <div class="col-11 fs-1 p-0 d-flex flex-column justify-content-center text-light my-3">
        <section class="row">
          <div class="text-center fs-2 p-5">
            <p>
              codeFitness seeks to bridge the gap between video games and gym gains.
            </p>
            <br>
            <p class="fs-5">
              By providing a platform to find useful
              exercises, collect and organize them, that also allows you to indulge in the joy of leveling up and
              achievements, codeFitness strives to bring the power of the player to strength and fitness!
              <br><span class="fw-bold">CodeFitness</span> is brought to you by Vue.js, Node.js, Vue Tour, and viewers
              like you
              <br><span class="fw-bold">Thank You!</span>
            </p>
          </div>
        </section>
        <section v-if="selectedDev == 0" class="row d-flex justify-content-center flex-grow-1">
          <div class="text-center fs-1 p-5">
            Select your developer!
          </div>
        </section>

        <section v-if="selectedDev == 1" class="row reserved-space">
          <h1 class="col-12 col-md-4 d-flex flex-column justify-content-between fs-3 mb-0 ewan-space">
            <div>Ewan</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-12 col-md-8 fs-5 h-100 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Favorite Feature:
              <span style="--n:200">
                My favorite part of this application would be the logic the badges uses in the back end to integrate with
                the various Http requests the website already makes.
              </span>
            </p>
            <a href="https://www.linkedin.com/in/ewan-stubblefield-allen/" class="mdi mdi-linkedin fs-3" target="_blank">
              Ewan Stubblefield-Allen</a>
            <a href="https://github.com/EwanStubblefield-Allen" class="mdi mdi-github fs-3" target="_blank">
              EwanStubblefield-Allen
            </a>
          </h2>
        </section>

        <section v-if="selectedDev == 2" class="row reserved-space">
          <h1 class="col-12 col-md-4 d-flex flex-column justify-content-between fs-3 mb-0 faith-space">
            <div>Faith</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-12 col-md-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Favorite Feature:
              <span style="--n:200">
                The flu gets a Chuck Norris shot every year. Chuck Norris does not use spell check. If he happens to
                misspell a word, Oxford will change the spelling.
              </span>
            </p>
            <a href="www.linkedin.com/in/faith-morgan-94686b289" class="mdi mdi-linkedin fs-3" target="_blank">
              Username</a>
            <a href="https://github.com/fthmorgan" class="mdi mdi-github fs-3" target="_blank"> Username</a>
          </h2>
        </section>

        <section v-if="selectedDev == 3" class="row reserved-space">
          <h1 class="col-12 col-md-4 vh-50 d-flex flex-column justify-content-between fs-3 mb-0 jasper-space">
            <div>Jasper</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-12 col-md-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Favorite Feature:
              <span style="--n:200">
                I like how we overcame different obstacles in API's and eventually found a decent way around it given the restraints we had. Also the logic in the backend for the achievements and points, as well as routines leveling up are some of my favorite features of our Application. Also the confetti, muscle man, and superset stuff is pretty awesome!
              </span>
            </p>
            <a href="https://linkedin.com/in/jasper-delight-a00771122" class="mdi mdi-linkedin fs-3" target="_blank">
              Jasper Delight</a>
            <a href="https://github.com/Jasperdelight" class="mdi mdi-github fs-3" target="_blank"> Jasperdelight</a>
          </h2>
        </section>

        <section v-if="selectedDev == 4" class="row reserved-space">
          <h1 class="col-12 col-md-4 vh-50 d-flex flex-column justify-content-between fs-3 mb-0 josh-space">
            <div>Josh</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-12 col-md-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Favorite Feature:
              <span style="--n:200">
                Chuck Norris drinks napalm to fight his heartburn. When Chuck Norris gives you the finger, he’s telling
                you how many seconds you have left to live.
              </span>
            </p>
            <a href="https://media.licdn.com/dms/image/C4D08AQGFQY2DdUn5rA/croft-frontend-shrinkToFit1024/0/1618354043908?e=2147483647&v=beta&t=ivuEAn9FyNhduPe2e1XoUj_wQR1Mi7AoTQBaPgvhNIM"
              class="mdi mdi-linkedin fs-3" target="_blank"> Username</a>
            <a href="https://datacuber.cl/images/github/meme_final.jpg" class="mdi mdi-github fs-3" target="_blank">
              Username</a>
          </h2>
        </section>

        <section v-if="selectedDev == 5" class="row reserved-space">
          <h1 class="col-12 col-md-4 vh-50 d-flex flex-column justify-content-between fs-3 mb-0 kyle-space">
            <div>Kyle Peppersack</div>
            <div class="text-end">Full Stack Developer</div>
          </h1>
          <h2 class="col-12 col-md-8 fs-5 d-flex flex-column justify-content-around mb-0">
            <p class="fs-2">Favorite Feature:
              <span style="--n:200">
                On New Year’s Eve, Chuck Norris promised that he’d lose 20 pounds. The next morning he shaved his chest
                and smiled as he realized that he’d lost 30.
              </span>
            </p>
            <a href="http://linkedin.com/in/kyle-peppersack-a39025285" class="mdi mdi-linkedin fs-3" target="_blank"> Kyle
              Peppersack</a>
            <a href="https://github.com/KylePep" class="mdi mdi-github fs-3" target="_blank"> KylePep</a>
          </h2>
        </section>
      </div>
    </section>

    <section class="row">
      <div class="col-12 d-flex flex-column flex-md-row justify-content-around dev-select">
        <div style="background-image: url('src/assets/img/ewan-icon.jpg');"
          class="icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1 selectable"
          :class="{ iconBorder: selectedDev == 1 }" @click="changeDev(1)">
          <p class="fs-1">Ewan</p>
          <!-- <img src="src/assets/img/ewan-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/faith-icon.jpg');"
          class="icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1 selectable"
          :class="{ iconBorder: selectedDev == 2 }" @click="changeDev(2)">
          <p class="fs-1">Faith</p>
          <!-- <img src="../assets/img/faith-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/jasper-icon.jpg');"
          class="icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1 selectable"
          :class="{ iconBorder: selectedDev == 3 }" @click="changeDev(3)">
          <p class="fs-1">Jasper</p>
          <!-- <img src="src/assets/img/jasper-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/josh-icon.jpg');"
          class="icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1 selectable"
          :class="{ iconBorder: selectedDev == 4 }" @click="changeDev(4)">
          <p class="fs-1">Josh</p>
          <!-- <img src="src/assets/img/josh-icon.jpg" alt=""> -->
        </div>
        <div style="background-image: url('src/assets/img/Kyle-icon.jpg');"
          class="icon-space d-flex flex-column justify-content-end align-items-center flex-grow-1 selectable"
          :class="{ iconBorder: selectedDev == 5 }" @click="changeDev(5)">
          <p class="fs-1">Kyle</p>
          <!-- <img src="../assets/img/Kyle-icon.jpg" alt=""> -->
        </div>
      </div>
    </section>
    <section class="row   text-center mt-4 p-5 text-light">
      <h1 class="col-12">Program your Fitness</h1>
      <section class="row justify-content-center">
        <div class="col-md-4 col-12 justify-content-center">
          <img class="img-fluid ms-3" src="../assets/img/CFTee.png" alt="logo" height="355" />
        </div>
        <div class="col-md-4 col-12 justify-content-center">
          <img class="img-fluid" src="../assets/img/CFHat.png" alt="logo" height="155" />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue"

export default {
  setup() {
    const selectedDev = ref({})

    onMounted(() =>
      selectedDev.value = 0
    )

    onUnmounted(() => {
      document.documentElement.scrollTop = 0
    })

    return {
      selectedDev,

      changeDev(dev) {
        selectedDev.value = dev
      }
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

  @media screen and (min-width: 768px) {
    .reserved-space span {
      color: #0000;
      background: linear-gradient(-90deg, rgba(255, 0, 0, 0) 5px, #0000 0) 10px 0,
        linear-gradient(white 0 0) 0 0;
      background-size: calc(var(--n)*1ch) 200%;
      -webkit-background-clip: padding-box,
        text;
      background-clip: padding-box,
        text;
      background-repeat: no-repeat;
      animation: b .7s infinite steps(1),
        t calc(var(--n)*.1s) steps(var(--n)) forwards;
    }

    @keyframes t {
      from {
        background-size: 0 200%
      }
    }

    @keyframes b {
      50% {
        background-position: 0 -100%, 0 0
      }
    }

    @keyframes typing {
      0% {
        width: 0%
      }

      100% {
        width: 100%
      }
    }

  }

  @keyframes type {
    from {
      width: 0;
    }
  }

  .reserved-space h2 {
    border: thick double #ffffff;
  }

  .ewan-space {
    background-image: url('src/assets/img/ewan-bg.jpg');
    min-height: 50vh;
  }

  .faith-space {
    background-image: url('src/assets/img/faith-bg.jpg');
    background-position: top;
    min-height: 50vh;
  }

  .jasper-space {
    background-image: url('src/assets/img/jasper-bg.jpg');
    background-position: top;
    min-height: 50vh;
  }

  .josh-space {
    background-image: url('src/assets/img/josh-bg.jpg');
    background-position: top;
    min-height: 50vh;
  }

  .kyle-space {
    background-image: url('src/assets/img/kyle-bg.jpg');
    background-position: right top;
    min-height: 50vh;
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

  .iconBorder {
    border: 1rem solid #ffffff;
  }

  .reserved-space {
    background-image: linear-gradient(#4496b6, #2e728d, #10313e);
  }

  .reserved-space>div {
    height: 55vh;
  }

  .reserved-space a {
    color: white;
  }

  .dev-select {
    background-color: var(--neutral-light);
    text-align: center;
    padding-top: 5vh;
  padding-bottom: 5vh;

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
}</style>