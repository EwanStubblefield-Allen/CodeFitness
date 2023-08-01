import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { routinesService } from "../services/RoutinesService.js";

export class RoutinesController extends BaseController {
  constructor() {
    super('api/routines')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createRoutine)
  }
  async createRoutine(req, res, next) {
    try {
      const routineData = req.body
      routineData.creatorId = req.userInfo.id
      const routine = await routinesService.createRoutine(routineData)
      return res.send(routine)
    } catch (error) {
      next(error)
    }
  }
}