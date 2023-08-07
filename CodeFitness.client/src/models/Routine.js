export class Routine {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.title = data.title
    this.public = data.public
    this.accountId = data.accountId
    this.profile = data.profile
    this.activities = data.activity
    this.picture = data.picture
  }
}