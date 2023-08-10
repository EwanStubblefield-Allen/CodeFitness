import { Auth0Provider } from "@bcwdev/auth0provider";
import { routinesService } from "../services/RoutinesService.js";
import { activitiesService } from "../services/ActivitiesService.js";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";

export class RoutinesController extends BaseController {
  constructor() {
    super('api/routines')
    this.router
      .get('', this.getRoutines)
      .get('/:routineId', this.getRoutineById)
      .get('/:routineId/activities', this.getActivitiesByRoutineId)
      .get('/:routineId/comments', this.getCommentsByRoutineId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createRoutine)
      .put('/:routineId', this.updateRoutine)
      .delete('/:routineId', this.removeRoutine)
  }
  async getCommentsByRoutineId(req, res, next) {
    try {
      const routineId = req.params.routineId
      const comment = await commentsService.getCommentsByRoutineId(routineId)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }

  async getRoutines(req, res, next) {
    try {
      const routines = await routinesService.getRoutines()
      return res.send(routines)
    } catch (error) {
      next(error);
    }
  }

  async getRoutineById(req, res, next) {
    try {
      const routine = await routinesService.getRoutineById(req.params.routineId)
      return res.send(routine)
    } catch (error) {
      next(error)
    }
  }

  async getActivitiesByRoutineId(req, res, next) {
    try {
      const activities = await activitiesService.getActivitiesByRoutineId(req.params.routineId)
      return res.send(activities)
    } catch (error) {
      next(error)
    }
  }

  async createRoutine(req, res, next) {
    try {
      const routineData = req.body
      routineData.accountId = req.userInfo.id
      const routine = await routinesService.createRoutine(routineData)
      return res.send(routine)
    } catch (error) {
      next(error)
    }
  }

  async updateRoutine(req, res, next) {
    try {
      const routineData = req.body
      routineData.accountId = req.userInfo.id
      routineData.id = req.params.routineId
      const routine = await routinesService.updateRoutine(routineData)
      return res.send(routine)
    } catch (error) {
      next(error);
    }
  }
  async removeRoutine(req, res, next) {
    try {
      const routine = await routinesService.removeRoutine(req.userInfo.id, req.params.routineId)
      return res.send(routine)
    } catch (error) {
      next(error)
    }
  }
}