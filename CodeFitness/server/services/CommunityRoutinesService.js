import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CommunityRoutinesService {
  async getCommunityRoutines() {
    return await dbContext.CommunityRoutines.find().populate('activity')
  }

  async getCommunityRoutinesById(communityRoutineId) {
    const communityRoutineData = await dbContext.CommunityRoutines.findById(communityRoutineId).populate('activity')
    if (!communityRoutineData) {
      throw new BadRequest(`[NO COMMUNITY ROUTINES MATCH THE ID: ${communityRoutineId}]`)
    }
    return communityRoutineData
  }

  async getCommunityRoutinesByCommunity(communityId) {
    return await dbContext.CommunityRoutines
      .aggregate([{
        $match: {
          community: communityId
        }
      }])
  }

  async createCommunityRoutine(communityRoutineData) {
    const communityRoutine = await dbContext.CommunityRoutines.create(communityRoutineData)
    await communityRoutine.populate('activity')
    return communityRoutine
  }
}

export const communityRoutinesService = new CommunityRoutinesService()