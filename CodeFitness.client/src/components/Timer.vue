<template>
  <div class="col-12 bg-neutral-dark px-2 pt-3 pb-2 rounded ">
    <div v-if="!timerOn">
      <section class="row justify-content-center">
        <div class="col-4">
          <button @click="timerOn = true, controlTimer(1)" class="btn btn-action">Timer On</button>
        </div>
      </section>
      <section class="row justify-content-around timer-data  px-3 pt-2">
        <div class="col-3">
          <div class="d-flex  text-center text-light pt-2 ">
            {{ editable.minutes }}
            <span for="minutes" class="fw-bold"> :Minutes</span>
          </div>
        </div>
        <div class="col-2 ">
          <div class="d-flex flex-column ms-3">
            <i @click="controlTime(1, 1)" class=" text-center selectable mdi mdi-arrow-up-bold "></i>
            <i @click="controlTime(1, -1)" class=" text-center selectable mdi mdi-arrow-down-bold"></i>
          </div>
        </div>
        <div class="col-3">
          <div class="d-flex  text-center text-light pt-2">
            {{ editable.seconds }}
            <p for="seconds" class="fw-bold"> :Seconds</p>
          </div>
        </div>
        <div class="col-2 ">
          <div class="d-flex flex-column ms-3">
            <i @click="controlTime(2, 1)" class=" text-center selectable mdi mdi-arrow-up-bold"></i>
            <i @click="controlTime(2, -1)" class=" text-center selectable mdi mdi-arrow-down-bold"></i>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <div>
        <section class="row justify-content-center align-items-center">
          <div class="col-2"></div>
          <div class="col-2">
            <!-- <i id="alarm" class="col-1 mdi mdi-timer-sand-empty me-3 alarm "></i> -->
            <img id="alarm" class="img-fluid alarm"
              src="https://gcdn.thunderstore.io/live/repository/icons/mrchous-NoBossNoWait-1.0.0.png.256x256_q95.png"
              alt="">
          </div>
          <div class="col-4 ">
            <button @click="timerOn = false, controlTimer(-1)" class="btn btn-action">Timer Off</button>
          </div>
          <div class="col-4"></div>
        </section>
        <section class=" row timer-data pt-2 px-2">

          <div class="col-12 ">
            <div class="progress bg-dark rounded-0 m-2 border border-light" role="progressbar">
              <div class="progress-bar bg-success" :style="{ 'width': (time / timeMax) * 100 + '%' }"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue"
import { logger } from "../utils/Logger.js"

export default {
  setup() {
    const timerOn = ref(false)
    const editable = ref({})
    const time = ref(0)
    const intervalId = ref()
    onMounted(() => {
      editable.value.minutes = 1
      editable.value.seconds = 30
    })
    return {
      timerOn,
      editable,
      time,
      timeMax: computed(() => {
        let time = (((editable.value.minutes * 60) + editable.value.seconds) * 1000)
        return time
      }),
      controlTimer(state) {
        time.value = this.timeMax

        if (state == 1) {
          // debugger

          if (!this.intervalId) {
            logger.log(this.intervalId, 'start')
            this.intervalId = setInterval(this.controlTiming, 1000, 1000)
          }
        } else {
          clearInterval(this.intervalId)
          this.intervalId = null
          logger.log(this.intervalId, 'stop')
        }
      },
      controlTiming(change) {
        logger.log(time.value)

        if (time.value <= 0) {
          document.getElementById('alarm').classList.add('shake')
          time.value = 0
        } else {
          time.value -= change
        }
        return time
      },
      controlTime(type, change) {
        let seconds = editable.value.seconds
        let minutes = editable.value.minutes

        if (type == 1) {
          if (change == 1) {
            if (minutes == 59) {
              return editable.value.minutes = minutes
            } else minutes += 1
          } else {
            if (minutes == 0) {
              if (editable.value.seconds != 0) {
                minutes = 0
              } else {
                return editable.value.minutes = minutes
              }
            } else minutes -= 1
          }
          return editable.value.minutes = minutes
        }
        else {
          if (change == 1) {
            if (seconds == 59) {
              editable.value.minutes += 1
              seconds = 0
            } else seconds += 1
          } else {
            if (seconds == 0) {
              if (editable.value.minutes != 0) {
                editable.value.minutes -= 1
                seconds = 59
              } else {
                seconds = 59
              }
            } else seconds -= 1
          }
          return editable.value.seconds = seconds
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  font-size: 12px;
  padding-top: 1vh;
  padding-bottom: 1vh;
}

.timer-data {
  height: 7vh;
}

.alarm {
  filter: drop-shadow(3px 3px var(--darkest)) drop-shadow(-3px -3px var(--neutral-dark));
}

.shake {
  color: var(--action);
  filter: drop-shadow(2px 2px var(--action)) drop-shadow(-2px -2px var(--light));
  // text-shadow: 0 0 20px var(--light);
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>