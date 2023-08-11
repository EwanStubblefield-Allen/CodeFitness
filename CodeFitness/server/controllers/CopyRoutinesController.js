import { Auth0Provider } from "@bcwdev/auth0provider";
import { copyRoutineService } from "../services/CopyRoutinesService.js";
import BaseController from "../utils/BaseController.js";

export class CopyRoutinesController extends BaseController {
  constructor() {
    super('api/copyRoutines')
    this.router
      .get('/:copyRoutineId', this.getCopyRoutineById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCopyRoutine)
      .delete('/:copyRoutineId', this.removeCopyRoutine)
  }

  async getCopyRoutineById(req, res, next) {
    try {
      const copyRoutine = await copyRoutineService.getCopyRoutineById(req.params.copyRoutineId)
      return res.send(copyRoutine)
    } catch (error) {
      next(error)
    }
  }

  async createCopyRoutine(req, res, next) {
    try {
      const copyRoutineData = req.body
      copyRoutineData.accountId = req.userInfo.id
      const copyRoutine = await copyRoutineService.createCopyRoutine(copyRoutineData)
      return res.send(copyRoutine)
    } catch (error) {
      next(error)
    }
  }

  async removeCopyRoutine(req, res, next) {
    try {
      const copyRoutineData = {}
      copyRoutineData.id = req.params.copyRoutineId
      copyRoutineData.accountId = req.userInfo.id
      const copyRoutine = await copyRoutineService.removeCopyRoutine(copyRoutineData)
      return res.send(copyRoutine)
    } catch (error) {
      next(error)
    }
  }
}