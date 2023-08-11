import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { communityRoutinesService } from "../services/CommunityRoutinesService.js";

export class CommunityRoutinesController extends BaseController {
  constructor() {
    super('api/communityRoutines')
    this.router
      .get('', this.getCommunityRoutines)
      .get('/:communityRoutineId', this.getCommunityRoutinesById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCommunityRoutine)
  }

  async getCommunityRoutines(req, res, next) {
    try {
      const communityRoutines = await communityRoutinesService.getCommunityRoutines()
      return res.send(communityRoutines)
    } catch (error) {
      next(error)
    }
  }

  async getCommunityRoutinesById(req, res, next) {
    try {
      const communityRoutine = await communityRoutinesService.getCommunityRoutinesById(req.params.communityRoutineId)
      return res.send(communityRoutine)
    } catch (error) {
      next(error)
    }
  }

  async createCommunityRoutine(req, res, next) {
    try {
      const communityRoutine = await communityRoutinesService.createCommunityRoutine(req.body)
      return res.send(communityRoutine)
    } catch (error) {
      next(error)
    }
  }
}