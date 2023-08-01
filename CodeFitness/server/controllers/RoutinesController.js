import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { routinesService } from "../services/RoutinesService.js";

export class RoutinesController extends BaseController {
  constructor() {
    super('api/routines')
    this.router
      .get('', this.getRoutines)
      .get('/:routineId', this.getRoutineById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createRoutine)
      .delete('/:routineId', this.removeRoutine)
  }
  async getRoutineById(req, res, next) {
    try {
      const routineId = req.params.routineId
      const routine = await routinesService.getRoutineById(routineId)

      return res.send(routine)
    } catch (error) {
      next(error)
    }
  }
  async removeRoutine(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const routineId = req.params.routineId
      const routine = await routinesService.removeRoutine(accountId, routineId)
      return res.send(routine)
    } catch (error) {
      next(error)
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
}