export class Emote {
  constructor(data) {
    this.id = data.id
    this.accountId = data.accountId
    this.commentId = data.commentId
    this.emote = data.emote
    this.profile = data.profile
  }
}