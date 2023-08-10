import { AppState } from "../AppState.js"
import { Activity } from "./Activity.js"

export class Routine {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.picture = data.picture || 'https://img.freepik.com/free-vector/pixel-art-mystical-background_52683-87349.jpg?size=626&ext=jpg&ga=GA1.1.423495681.1687052097&semt=ais'
    this.public = data.public
    this.completeCount = data.completeCount
    this.accountId = data.accountId
    this.profile = data.profile
    this.activities = data.activity.map(a => new Activity(a))
    this.updatedAt = new Date(data.updatedAt).valueOf()
    this.createdAt = data.createdAt
  }
}