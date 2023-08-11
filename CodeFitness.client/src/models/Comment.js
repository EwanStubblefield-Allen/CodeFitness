export class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.accountId = data.accountId
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.profile = data.profile
    this.community = data.community
  }
}