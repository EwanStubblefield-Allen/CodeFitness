import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { accountAchievementsService } from "./AccountAchievementsService.js"
import { activitiesService } from "./ActivitiesService.js"
import { communityRoutinesService } from "./CommunityRoutinesService.js"

class RoutinesService {
  async getRoutines() {
    return await dbContext.Routines.find().populate('profile').populate('activities')
  }

  async getRoutineById(routineId) {
    const routine = await dbContext.Routines.findById(routineId).populate('profile', 'name picture').populate('activities')
    if (!routine) {
      throw new BadRequest(`[NO ROUTINES MATCH THE ID: ${routineId}]`)
    }
    return routine
  }

  async getRoutinesByAccountId(accountId) {
    const routines = await dbContext.Routines.find({ accountId: accountId }).populate('profile', 'name picture').populate('activities')
    return routines
  }

  async createRoutine(routineData) {
    const routine = await dbContext.Routines.create(routineData)
    await routine.populate('profile', 'name picture')
    await routine.populate('activities')
    const accountAchievement = await accountAchievementsService.updateAccountAchievement(routine.accountId, 'routineCount', 1)
    return { routine: routine, accountAchievement: accountAchievement }
  }

  async createCopyRoutine(routineData) {
    let copyRoutineData
    if (routineData.community) {
      copyRoutineData = (await communityRoutinesService.getCommunityRoutinesById(routineData.id)).toObject()
      copyRoutineData.authorId = routineData.accountId
    } else {
      copyRoutineData = (await this.getRoutineById(routineData.id)).toObject()
    }
    delete copyRoutineData._id
    copyRoutineData.accountId = routineData.accountId
    copyRoutineData.completeCount = 0
    const copyRoutine = await dbContext.Routines.create(copyRoutineData)
    await activitiesService.createActivitiesByCopyRoutineId(routineData.id, copyRoutine)
    await copyRoutine.populate('profile', 'name picture')
    await copyRoutine.populate('activities')
    return copyRoutine
  }

  async updateRoutine(routineData) {
    const updateRoutine = await this.getData(routineData)
    let accountAchievement
    if (routineData.completeCount) {
      accountAchievement = await accountAchievementsService.updateAccountAchievement(routineData.accountId, 'completeCount', routineData.completeCount - updateRoutine.completeCount)
    }
    updateRoutine.title = routineData.title || updateRoutine.title
    updateRoutine.picture = routineData.picture || updateRoutine.picture
    updateRoutine.description = routineData.description || updateRoutine.description
    updateRoutine.completeCount = routineData.completeCount || updateRoutine.completeCount
    await updateRoutine.save()
    return { routine: updateRoutine, accountAchievement: accountAchievement }
  }

  async removeRoutine(routineData) {
    const routineToRemove = await this.getData(routineData)
    await activitiesService.removeAllActivitiesByRoutineId(routineData.accountId, routineData.id)
    await routineToRemove.remove()
    return routineToRemove
  }

  async getData(routineData) {
    const routine = await this.getRoutineById(routineData.id)
    if (routine.accountId != routineData.accountId) {
      throw new Forbidden(`[YOU ARE NOT THE CREATOR OF ${routine.title}`)
    }
    return routine
  }
}

export const routinesService = new RoutinesService()