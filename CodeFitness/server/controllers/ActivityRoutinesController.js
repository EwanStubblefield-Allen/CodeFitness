import { Auth0Provider } from "@bcwdev/auth0provider";
import { activityRoutinesService } from "../services/ActivityRoutinesService.js";
import BaseController from "../utils/BaseController.js";

export class ActivityRoutinesController extends BaseController {
  constructor() {
    super('api/activityroutines')
    this.router
      .get('', this.getActivityRoutines)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createActivityRoutine)
  }
  async createActivityRoutine(req, res, next) {
    try {
      const activityData = req.body
      activityData.accountId = req.userInfo.id
      const newActivityRoutine = await activityRoutinesService.createActivityRoutines(activityData)
      return res.send(newActivityRoutine)
    } catch (error) {
      next(error);
    }
  }
  async getActivityRoutines(req, res, next) {
    try {
      const activityRoutines = await activityRoutinesService.getActivityRoutines()
      return res.send(activityRoutines)
    } catch (error) {
      next(error);
    }
  }


}