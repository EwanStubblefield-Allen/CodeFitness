import { accountAchievementsService } from '../services/AccountAchievementsService.js'
import { commentsService } from "../services/CommentsService.js"
import { copyRoutineService } from '../services/CopyRoutinesService.js'
import { profileService } from '../services/ProfileService.js'
import { routinesService } from '../services/RoutinesService.js'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:profileId', this.getProfileById)
      .get('/:accountId/routines', this.getRoutinesByAccountId)
      .get('/:accountId/accountAchievements', this.getAccountAchievementsByAccountId)
      // .get('/:accountId/copyRoutines', this.getCopyRoutinesByAccountId)
      .get('/:accountId/comments', this.getCommentsByAccountId)
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      return res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfileById(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.profileId)
      return res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getRoutinesByAccountId(req, res, next) {
    try {
      const routines = await routinesService.getRoutinesByAccountId(req.params.accountId)
      return res.send(routines)
    } catch (error) {
      next(error)
    }
  }

  async getAccountAchievementsByAccountId(req, res, next) {
    try {
      const accountAchievements = await accountAchievementsService.getAccountAchievementsByAccountId(req.params.accountId)
      return res.send(accountAchievements)
    } catch (error) {
      next(error)
    }
  }

  // async getCopyRoutinesByAccountId(req, res, next) {
  //   try {
  //     const copyRoutines = await copyRoutineService.getCopyRoutinesByAccountId(req.params.accountId)
  //     return res.send(copyRoutines)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async getCommentsByAccountId(req, res, next) {
    try {
      const comment = await commentsService.getCommentsByAccountId(req.params.accountId)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }
}
