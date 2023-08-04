import { Auth0Provider } from "@bcwdev/auth0provider";
import { activitiesService } from "../services/ActivitiesService.js";
import BaseController from "../utils/BaseController.js";

export class ActivitiesController extends BaseController {
  constructor() {
    super('api/activities')
    this.router
      .get('', this.getActivities)
      .get('/:activityId', this.getActivityById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createActivity)
      .put('/:activityId', this.updateActivity)
      .delete('/:activityId', this.removeActivity)
  }

  async getActivities(req, res, next) {
    try {
      const activities = await activitiesService.getActivities()
      return res.send(activities)
    } catch (error) {
      next(error)
    }
  }

  async getActivityById(req, res, next) {
    try {
      const activityId = req.params.activityId
      const activity = await activitiesService.getActivityById(activityId)
      return res.send(activity)
    } catch (error) {
      next(error);
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

  async updateActivity(req, res, next) {
    try {
      const activityData = req.body
      activityData.accountId = req.userInfo.id
      activityData.id = req.params.activityId
      const activity = await activitiesService.updateActivity(activityData)
      return res.send(activity)
    } catch (error) {
      next(error)
    }
  }

  async removeActivity(req, res, next) {
    try {
      const activityData = {}
      activityData.id = req.params.activityId
      activityData.accountId = req.userInfo.id
      const activity = await activitiesService.removeActivity(activityData)
      return res.send(activity)
    } catch (error) {
      next(error);
    }
  }
}