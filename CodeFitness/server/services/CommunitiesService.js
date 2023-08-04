import { dbContext } from "../db/DbContext.js"

class CommunitiesService {
  async getCommunities() {
    return await dbContext.Account.aggregate([{
      $group: {
        _id: '$community',
        'totalPoints': { $sum: '$points' }
      }
    }])
  }
}

export const communitiesService = new CommunitiesService()