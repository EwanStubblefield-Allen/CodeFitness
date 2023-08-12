import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class EmotesService {
  async getEmotes() {
    return await dbContext.Emotes.find()
  }

  async getEmoteById(emoteId) {
    const emote = await dbContext.Emotes.findById(emoteId)
    if (!emote) {
      throw new BadRequest('[NO EMOTE MATCH THE ID: ${emoteId}]')
    }
    return emote
  }

  async getEmoteByCommentIdAndAccountId(emoteData) {
    return await dbContext.Emotes.findOne({ accountId: emoteData.accountId, commentId: emoteData.commentId })
  }

  async createEmote(emoteData) {
    const emote = await this.getEmoteByCommentIdAndAccountId(emoteData)
    if (emote) {
      if (emote.accountId != emoteData.accountId) {
        throw new Forbidden(`[YOU ARE NOT THE CREATOR OF THIS EMOTE`)
      }
      return await emote.remove()
    }
    return await dbContext.Emotes.create(emoteData)
  }
}

export const emotesService = new EmotesService()