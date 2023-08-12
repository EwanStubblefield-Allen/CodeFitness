export class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.accountId = data.accountId
    this.createdAt = new Date(data.createdAt).toLocaleString()
    this.updatedAt = new Date(data.updatedAt).toLocaleString()
    this.profile = data.profile
    this.community = data.community
    this.emotes = data.emotes
  }
}