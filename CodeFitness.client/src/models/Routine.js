import { Activity } from "./Activity.js"

export class Routine {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.picture = data.picture
    this.public = data.public
    this.completeCount = data.completeCount
    this.accountId = data.accountId
    this.profile = data.profile
    this.activities = data.activity.map(a => new Activity(a))
    this.updatedAt = new Date(data.updatedAt).valueOf()
    this.createdAt = data.createdAt
  }
}