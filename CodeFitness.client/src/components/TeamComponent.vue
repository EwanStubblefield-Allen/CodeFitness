<template>
  <!-- SECTION Logged in with community -->
  <section v-if="account.community && account.id" class="row justify-content-around bg-neutral-dark">
    <RouterLink :to="{ name: 'Communities', params: { communityId: 'Cardio Kings' } }" :class="{ 'highlight1 order-2': account.community == 'Cardio Kings' }" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center elevation-5 flag text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagCK.png" alt="Cardio Kings">
        <p class="title pt-3">Cardio Kings</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Cardio Kings'] }}</p>
    </RouterLink>
    <RouterLink :to="{ name: 'Communities', params: { communityId: 'Weight Warriors' } }" :class="{ 'highlight2': account.community == 'Weight Warriors', 'order-3': account.community == 'Legion of Leisure' }" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center elevation-5 flag text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagWW.png" alt="Weight Warriors">
        <p class="title pt-3 v-step-0 ">Weight Warriors</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Weight Warriors'] }}</p>
    </RouterLink>
    <RouterLink :to="{ name: 'Communities', params: { communityId: 'Legion of Leisure' } }" :class="{ 'highlight3': account.community == 'Legion of Leisure', 'order-3': account.community == 'Cardio Kings' }" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center elevation-5 flag text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagLL.png" alt="Legion of Leisure">
        <p id="v-step-18" class="title pt-3">Legion of Leisure</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Legion of Leisure'] }}</p>
    </RouterLink>
  </section>
  <Tour v-if="wantsTour == true || account.needsTour == true" :steps="steps" :callbacks="callbacks" />

  <!-- SECTION Logged in without community -->
  <section v-if="!account.community && account.id" class="row justify-content-around bg-neutral-dark">
    <h1 class="text-center text-light my-3">Select a Community to Earn Points</h1>
    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="activeCommunity = 'Cardio Kings'" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center selectable elevation-5 flag highlight1 text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagCK.png" alt="Cardio Kings">
        <p class="title pt-3 v-step-0">Cardio Kings</p>
      </div>
      <p class="pt-3 fw-5 text-light">Global Points: {{ communities?.['Cardio Kings'] }}</p>
    </div>
    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="activeCommunity = 'Weight Warriors'" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center selectable elevation-5 flag highlight2 text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagWW.png" alt="Cardio Kings">
        <p id="v-step-18" class="title pt-3">Weight Warriors</p>
      </div>
      <p class="pt-3 fw-5 text-light">Global Points: {{ communities?.['Weight Warriors'] }}</p>
    </div>
    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="activeCommunity = 'Legion of Leisure'" class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center selectable elevation-5 flag highlight3 text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagLL.png" alt="Cardio Kings">
        <p class="title pt-3">Legion of Leisure</p>
      </div>
      <p class="pt-3 fw-5 text-light">Global Points: {{ communities?.['Legion of Leisure'] }}</p>
    </div>
  </section>

  <!-- SECTION Not logged in without community -->
  <section v-if="!account.community && !account.id" class="row justify-content-around bg-neutral-dark">
    <h1 class="text-center text-light my-3">Select a Community to Earn Points</h1>
    <div class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center  elevation-5 flag-no-hover text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagCK.png" alt="Cardio Kings">
        <p class="title pt-3">Cardio Kings</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Cardio Kings'] }}</p>
    </div>
    <div class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center  elevation-5 flag-no-hover text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagWW.png" alt="Cardio Kings">
        <p class="title pt-3">Weight Warriors</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Weight Warriors'] }}</p>
    </div>
    <div class="col-4 col-md-3 d-flex flex-column justify-content-between bg-neutral-light my-4 py-3 px-1 text-center  elevation-5 flag-no-hover text-dark">
      <div>
        <img class="w-75" src="../assets/img/flagLL.png" alt="Cardio Kings">
        <p class="title pt-3">Legion of Leisure</p>
      </div>
      <p class="pt-3 fw-5">Global Points: {{ communities?.['Legion of Leisure'] }}</p>
    </div>
  </section>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-neutral-dark">
        <div class="modal-body">

          <div v-if="activeCommunity == 'Cardio Kings'" class="bg-text-area">
            <h1 class="d-flex flex-column justify-content-between text-center p-3 bg-modal">
              <div class="text-end">
                <p type="button" class="mdi mdi-close text-light fs-3" data-bs-dismiss="modal" aria-label="Close"></p>
              </div>
              <div>
                Cardio kings
              </div>
            </h1>
            <h4 class="ps-3">
              Team Objectives:
              <div class="py-3">
                <div><i class="mdi mdi-circle-small"></i>Cardio</div>
                <div><i class="mdi mdi-circle-small"></i>Being King</div>
                <div><i class="mdi mdi-circle-small"></i>Cool shoes</div>
              </div>
            </h4>
            <div class="rounded py-1">
              <h5 class="ps-3">
                Team Description:
                <p class="text-start px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem dicta id totam ea. Quae placeat
                  modi
                  veritatis commodi magnam sunt, aperiam aut adipisci obcaecati? Maiores recusandae quas omnis
                  exercitationem!
                </p>
              </h5>
              <h6 class="ps-3">
                Recommended for:
                <div>
                  <div><i class="mdi mdi-circle-small"></i>This person</div>
                  <div><i class="mdi mdi-circle-small"></i>That person</div>
                  <div><i class="mdi mdi-circle-small"></i>Those people</div>
                </div>
              </h6>
            </div>
          </div>
          <div v-if="activeCommunity == 'Weight Warriors'" class="bg-text-area">
            <h1 class="d-flex flex-column justify-content-between text-center p-3 bg-modal">
              <div class="text-end">
                <p type="button" class="mdi mdi-close text-light fs-3" data-bs-dismiss="modal" aria-label="Close"></p>
              </div>
              <div>
                Weight Warriors
              </div>
            </h1>
            <h4 class="ps-3">
              Team Objectives:
              <div class="py-3">
                <div><i class="mdi mdi-circle-small"></i>Strength</div>
                <div><i class="mdi mdi-circle-small"></i>More Plates</div>
                <div><i class="mdi mdi-circle-small"></i>Heavy Things</div>
              </div>
            </h4>
            <div class="rounded py-1">
              <h5 class="ps-3">
                Team Description:
                <p class="text-start px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem dicta id totam ea. Quae placeat
                  modi
                  veritatis commodi magnam sunt, aperiam aut adipisci obcaecati? Maiores recusandae quas omnis
                  exercitationem!
                </p>
              </h5>
              <h6 class="ps-3">
                Recommended for:
                <div>
                  <div><i class="mdi mdi-circle-small"></i>This person</div>
                  <div><i class="mdi mdi-circle-small"></i>That person</div>
                  <div><i class="mdi mdi-circle-small"></i>Those people</div>
                </div>
              </h6>
            </div>
          </div>
          <div v-if="activeCommunity == 'Legion of Leisure'" class="bg-text-area">
            <h1 class="d-flex flex-column justify-content-between text-center p-3 bg-modal">
              <div class="text-end">
                <p type="button" class="mdi mdi-close text-light fs-3" data-bs-dismiss="modal" aria-label="Close"></p>
              </div>
              <div>
                Legion of Leisure
              </div>
            </h1>
            <h4 class="ps-3">
              Team Objectives:
              <div class="py-3">
                <div><i class="mdi mdi-circle-small"></i>Health</div>
                <div><i class="mdi mdi-circle-small"></i>Feeling good</div>
                <div><i class="mdi mdi-circle-small"></i>Participation</div>
              </div>
            </h4>
            <div class="rounded py-1">
              <h5 class="ps-3">
                Team Description:
                <p class="text-start px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem dicta id totam ea. Quae placeat
                  modi
                  veritatis commodi magnam sunt, aperiam aut adipisci obcaecati? Maiores recusandae quas omnis
                  exercitationem!
                </p>
              </h5>
              <h6 class="ps-3">
                Recommended for:
                <div>
                  <div><i class="mdi mdi-circle-small"></i>This person</div>
                  <div><i class="mdi mdi-circle-small"></i>That person</div>
                  <div><i class="mdi mdi-circle-small"></i>Those people</div>
                </div>
              </h6>
            </div>
          </div>
        </div>
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        <div class="d-flex justify-content-center py-3">
          <button @click="selectCommunity(activeCommunity)" type="button" class="button-modal py-3">Select
            Community</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { accountService } from "../services/AccountService.js"
import { communitiesService } from '../services/CommunitiesService.js'
import { Modal } from "bootstrap"
import Pop from "../utils/Pop.js"

export default {
  setup() {
    const bgImage = ref('')
    const color1 = ref('')
    const color2 = ref('')
    const imgPos = ref(0)
    const activeCommunity = ref('')
    onMounted(() => {
      getCommunitiesPoints()
    })

    watchEffect(() => {
      switch (activeCommunity.value) {
        case 'Cardio Kings':
          bgImage.value = 'url(src/assets/img/iconCK.png)'
          color1.value = '#e21313'
          color2.value = '#7c1a1a'
          imgPos.value = '80%'

          break
        case 'Weight Warriors':
          bgImage.value = 'url(src/assets/img/iconWW.png)'
          color1.value = '#1222da'
          color2.value = '#1a227c'
          imgPos.value = '30%'

          break
        case 'Legion of Leisure':
          bgImage.value = 'url(src/assets/img/iconLL.png)'
          color1.value = '#dac612'
          color2.value = '#776f26'
          imgPos.value = '40%'
          break

        default:
          bgImage.value = 'url(src/assets/img/iconLL.png)'
          color1.value = '#5e5e5e'
          color2.value = '#0d0d0d'
          break
      }
    })

    async function getCommunitiesPoints() {
      try {
        await communitiesService.getCommunitiesPoints()
      } catch (error) {
        Pop.error(error.message, '[GETTING COMMUNITY POINTS]')
      }
    }

    return {
      activeCommunity,
      bgImage,
      color1,
      color2,
      imgPos,
      account: computed(() => AppState.account),
      communities: computed(() => AppState.communities),
      wantsTour: computed(() => AppState.wantsTour),
      firstStepTour: computed(() => AppState.firstStepTour),
      steps: [
        {
          target: '.v-step-0',  // We're using document.querySelector() under the hood
          header: {
            title: 'Get Started'
          },
          content: `Pick a community to earn points and create routines!`,
          params: {
            enableScrolling: false,
            placement: 'bottom'
          }
        },
        // {
        //   target: '.v-step-1',
        //   content: 'After you choose a community click on a banner to see whose scoring the most points, or Copy the routines of other members!',
        //   params: {
        //     enableScrolling: false,
        //     placement: 'top'
        //   }
        // },
        {
          target: '#v-step-18',
          content: 'After you chose a community click on the community banners to go to the each communities page and see the top scorers!',
          params: {
            enableScrolling: false,
            placement: 'bottom'
          }
        }
      ],

      callbacks: {
        onFinish: (() => {
          // AppState.wantsTour = false,
          AppState.firstStepTour = true
          accountService.updateAccount({ needsTour: false })
        }),
        onSkip: (() => {
          AppState.wantsTour = false
          accountService.updateAccount({ needsTour: false })
        })
      },

      async selectCommunity(community) {
        try {
          const isSure = await Pop.confirm(`Are you sure you want to join ${community}?`)

          if (!isSure) {
            return
          }
          await accountService.updateAccount({ community: community })
          Modal.getOrCreateInstance('#exampleModal').hide()
        } catch (error) {
          Pop.error(error.message, '[SELECTING COMMUNITY]')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    color: white;
    font-size: x-small;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 3px 3px 1px black, -3px -3px 1px black, 3px -3px 1px black, -3px 3px 1px black, -3px 0px 1px black, 3px 0px 1px black, 0px -3px 1px black, 0px 3px 1px black;
  }

  .bg-modal {
    border: 5px solid white;
    height: 30vh;
    background-image: v-bind(bgImage), radial-gradient(v-bind(color1), v-bind(color2));
    background-position: 50% v-bind(imgPos);
    background-size: cover;
    image-rendering: pixelated;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 3px 3px 0 black, -3px -3px 0 black, 3px -3px 0 black, -3px 3px 0 black;
    color: #ffffff;
  }

  // .bg-modal div {
  //   backdrop-filter: blur(10px) grayscale(80%);
  // }

  .bg-text-area {
    color: var(--darkest);
    /* From https://css.glass */
    background: var(--background);
    border-radius: 6px;
  }

  .button-modal {
    border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 6px;
    background-color: v-bind(color1);
    background-image: linear-gradient(v-bind(color1), v-bind(color2));
  }

  button {
    cursor: pointer;
  }

  .flag {
    image-rendering: pixelated;
    color: var(--light);
    border: solid 4px var(--light);
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.400);
    transition: 1s;
  }

  .flag img {
    filter: drop-shadow(0 10px 10px black);

  }

  .flag-no-hover {
    image-rendering: pixelated;
    color: var(--light);
    border: solid 4px var(--light);
    text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.400);
  }

  .flag-no-hover img {
    filter: drop-shadow(0 10px 10px black);
  }

  .highlight1 {
    background: rgb(161, 132, 132);
    border: solid 4px whitesmoke;
    box-shadow: inset 0 0 50px #fff,
      inset 20px 0 80px rgb(255, 0, 0),
      inset -20px 0 300px rgb(195, 0, 0),
      inset 20px 0 300px rgb(255, 0, 0),
      inset -20px 0 300px rgb(195, 0, 0),
      0 0 50px #fff,
      -10px 0 80px rgb(255, 0, 0),
      10px 0 80px rgb(195, 0, 0);
  }

  .highlight2 {
    border: solid 4px whitesmoke;
    box-shadow:
      inset 0 0 50px #fff,
      inset 20px 0 80px #f0f,
      inset -20px 0 300px #0ff,
      inset 20px 0 300px #f0f,
      inset -20px 0 300px #0ff,
      0 0 50px #fff,
      -10px 0 80px #f0f,
      10px 0 80px #0ff;
  }

  .highlight3 {
    background: rgb(164, 159, 128);
    border: solid 4px whitesmoke;
    box-shadow:
      inset 0 0 50px #fff,
      inset 20px 0 80px rgb(255, 234, 0),
      inset -20px 0 300px rgb(231, 213, 109),
      inset 20px 0 300px rgb(255, 234, 0),
      inset -20px 0 300px rgb(231, 213, 109),
      0 0 50px #fff,
      -10px 0 80px rgb(255, 234, 0),
      10px 0 80px rgb(231, 213, 109);
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: large;
    }

    .flag:hover {
      transform: scale(1.025);
    }

    .highlight1,
    .highlight2,
    .highlight3 {
      transform: scale(1.10);
    }
  }
</style>