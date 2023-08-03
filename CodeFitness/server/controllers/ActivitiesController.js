import { Auth0Provider } from "@bcwdev/auth0provider";
import { activitiesService } from "../services/ActivitiesService.js";
import BaseController from "../utils/BaseController.js";

export class ActivitiesController extends BaseController {
  constructor() {
    super('api/activities')
    this.router
      .get('', this.getActivities)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createActivity)
  }

  async getActivities(req, res, next) {
    try {
      const activities = await activitiesService.getActivities()
      return res.send(activities)
    } catch (error) {
      next(error)
    }
  }

  async createActivity(req, res, next) {
    try {
      const activityData = req.body
      activityData.accountId = req.userInfo.id
      const newActivity = await activitiesService.createActivities(activityData)
      return res.send(newActivity)
    } catch (error) {
      next(error)
    }
  }
}