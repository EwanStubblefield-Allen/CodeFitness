import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  communities: null,
  /** @type {import('./models/Profile.js').Profile[]} */
  communityProfiles: [],
  /** @type {import('./models/Profile.js').Profile | null} */
  activeProfile: null,
  page: 0,
  nextPage: false,
  isEditing: false,
  template: {},
  /** @type {import('./models/Activity.js').Activity[]} */
  activities: [],
  /** @type {import('./models/Activity.js').Activity[]} */
  activeActivity: [],
  /** @type {import('./models/Routine.js').Routine[]} */
  routines: [],
  communityRoutines: [],
  /** @type {import('./models/Routine.js').Routine[]} */
  profileRoutines: [],
  /** @type {import('./models/Routine.js').Routine | null} */
  activeRoutine: null,
  /** @type {import('./models/Routine.js').Routine | null} */
  activeSuperRoutine: null,
  /** @type {import('./models/Achievement.js').Achievement[]}} */
  activeAchievements: [],
  /** @type {import('./models/Comment.js').Comment[]}} */
  comments: [],
  wantsTour: false,
  /** @type {import('./models/Comment.js').Comment | null}} */
  activeComment: null,
  randomImgForCover: [
    "https://img.freepik.com/free-vector/pixel-art-mystical-background_52683-87349.jpg?size=626&ext=jpg&ga=GA1.1.423495681.1687052097&semt=ais",
    "https://images.unsplash.com/photo-1495480393121-409eb65c7fbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05ea43dbe96aba57d48b792c93752068&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1501611724492-c09bebdba1ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebdb0480ffed49bd075fd85c54dd3317&auto=format&fit=crop&w=1491&q=80",
    "https://images.unsplash.com/photo-1417106338293-88a3c25ea0be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1565ecb73a2b38784db60c3b68ab3b8&auto=format&fit=crop&w=1352&q=80"
  ],
  randomImgForRoutine: [
    "https://img.freepik.com/free-vector/pixel-art-mystical-background_52683-87349.jpg?size=626&ext=jpg&ga=GA1.1.423495681.1687052097&semt=ais",
    "https://images.unsplash.com/photo-1495480393121-409eb65c7fbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05ea43dbe96aba57d48b792c93752068&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1501611724492-c09bebdba1ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebdb0480ffed49bd075fd85c54dd3317&auto=format&fit=crop&w=1491&q=80",
    "https://images.unsplash.com/photo-1417106338293-88a3c25ea0be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1565ecb73a2b38784db60c3b68ab3b8&auto=format&fit=crop&w=1352&q=80"
  ],
  randomImgForProfile: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOeCy-zk0RQkaqSGA3BtgfcXMqSpPx5fitg&usqp=CAU"
  ],
  firstStepTour: false
})