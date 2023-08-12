import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CommunityRoutinesService {
  async getCommunityRoutines() {
    return await dbContext.CommunityRoutines.find().populate('activities')
  }

  async getCommunityRoutinesById(communityRoutineId) {
    const communityRoutineData = await dbContext.CommunityRoutines.findById(communityRoutineId).populate('activities')
    if (!communityRoutineData) {
      throw new BadRequest(`[NO COMMUNITY ROUTINES MATCH THE ID: ${communityRoutineId}]`)
    }
    return communityRoutineData
  }

  async getCommunityRoutinesByCommunityId(communityId) {
    return await dbContext.CommunityRoutines.find({ community: communityId }).populate('activities')
  }

  async createCommunityRoutine(communityRoutineData) {
    const communityRoutine = await dbContext.CommunityRoutines.create(communityRoutineData)
    await communityRoutine.populate('activities')
    return communityRoutine
  }
}

export const communityRoutinesService = new CommunityRoutinesService()