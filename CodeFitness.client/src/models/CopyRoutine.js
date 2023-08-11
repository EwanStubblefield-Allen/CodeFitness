import { Activity } from "./Activity.js"
import { Routine } from "./Routine.js"

export class CopyRoutine {
  constructor(data) {
    this.id = data.id
    this.accountId = data.accountId
    this.routineId = data.routineId
    this.author = data.author
    this.routine = data.routine ? new Routine(data.routine) : ''
    this.communityRoutine = data.communityRoutine
    this.activity = data.activity.map(a => new Activity(a))
  }
}