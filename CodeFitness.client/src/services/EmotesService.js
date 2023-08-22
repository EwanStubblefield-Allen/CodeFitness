import { AppState } from "../AppState.js"
import { Emote } from "../models/Emote.js"
import { api } from "./AxiosService.js"

class EmotesService {
  async createEmote(emoteData) {
    const res = await api.post('api/emotes', emoteData)
    const emote = new Emote(res.data)
    const foundComment = AppState.comments.find(c => c.id == emote.commentId)
    const foundEmote = foundComment.emotes.find(e => e.accountId == AppState.account.id)

    if (!foundEmote) {
      foundComment.emotes.push(emote)
    } else {
      foundComment.emotes = foundComment.emotes.filter(e => e.id != foundEmote.id)
    }
  }
}

export const emotesService = new EmotesService()