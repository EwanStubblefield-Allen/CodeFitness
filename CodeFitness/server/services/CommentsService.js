import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CommentsService {
  async getCommentsByCommunityId(communityId) {
    return await dbContext.Comments.find({ community: communityId }).populate('profile', 'name picture')

  }
  async getComments() {
    return await dbContext.Comments.find().populate('profile', 'name picture')
  }

  async getCommentById(commentId) {
    const comment = await dbContext.Comments.findById(commentId).populate('profile', 'name picture')
    if (!comment) {
      throw new BadRequest(`[NO COMMENT MATCH THE ID: ${commentId}]`)
    }
    return comment
  }


  async getCommentsByAccountId(accountId) {
    const comment = await dbContext.Comments.find({ accountId: accountId }).populate('profile', 'name picture')
    return comment
  }

  async getCommentsByRoutineId(routineId) {
    const comment = await dbContext.Comments.find({ routineId: routineId }).populate('profile', 'name picture')
    return comment
  }

  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('profile', 'name picture')
    return comment
  }

  async updateComment(commentData) {
    const updateComment = await this.getData(commentData)
    updateComment.body = commentData.body || updateComment.body
    await updateComment.save()
    return updateComment
  }

  async removeComment(commentData) {
    const commentToRemove = await this.getData(commentData)
    await commentToRemove.remove()
    return commentToRemove
  }

  async getData(commentData) {
    const comment = await this.getCommentById(commentData.id)
    if (comment.accountId != commentData.accountId) {
      throw new Forbidden(`[YOU ARE NOT THE CREATOR OF THIS COMMENT`)
    }
    return comment
  }
}

export const commentsService = new CommentsService()