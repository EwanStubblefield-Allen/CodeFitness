import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Activity.js').Activity[]} */
  activities: [],
  template: {},
  /** @type {import('./models/Activity.js').Activity | null} */
  activeActivity: null,
  /** @type {import('./models/Routine.js').Routine[]} */
  routines: []
})