import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { emotesService } from "../services/EmotesService.js";

export class EmotesController extends BaseController {
  constructor() {
    super('api/emotes')
    this.router
      .get('', this.getEmotes)
      .get('/:emoteId', this.getEmoteById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEmote)
  }

  async getEmotes(req, res, next) {
    try {
      const emotes = await emotesService.getEmotes()
      return res.send(emotes)
    } catch (error) {
      next(error)
    }
  }

  async getEmoteById(req, res, next) {
    try {
      const emote = await emotesService.getEmoteById(req.params.emoteId)
      return res.send(emote)
    } catch (error) {
      next(error)
    }
  }

  async createEmote(req, res, next) {
    try {
      const emoteData = req.body
      emoteData.accountId = req.userInfo.id
      const emote = await emotesService.createEmote(emoteData)
      return res.send(emote)
    } catch (error) {
      next(error)
    }
  }
}