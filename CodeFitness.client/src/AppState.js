import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  page: 0,
  nextPage: false,
  template: {},
  /** @type {import('./models/Activity.js').Activity[]} */
  activities: [],
  /** @type {import('./models/Activity.js').Activity | null} */
  activeActivity: null,
  /** @type {import('./models/Routine.js').Routine[]} */
  routines: [],
  picture: null,
  /** @type {import('./models/Routine.js').Routine | null} */
  activeRoutine: null,
  /** @type {import('./models/Achievement.js').Achievement[]}} */
  activeAchievements: []
})