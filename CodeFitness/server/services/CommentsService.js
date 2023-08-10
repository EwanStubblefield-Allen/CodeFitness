import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"

class CommentsService {
  async removeComment(commentId, userId) {
    const comment = await this.getCommentsById(commentId)
    if (userId != comment.accountId) {
      throw new Forbidden('You are not the author of this comment!')
    }
    await comment.remove()
    return comment
  }
  async editComment(commentId, userId, commentData) {
    const comment = await this.getCommentsById(commentId)
    if (userId != comment.accountId) {
      throw new Forbidden('You are not the author of this comment!')
    }
    comment.body = commentData.body || comment.body
    await comment.save()
    return comment
  }
  async getCommentsByRoutineId(routineId) {
    const comment = await dbContext.Comments.find({ routineId: routineId }).populate('profile', 'name picture')
    return comment
  }
  async getCommentsByAccountId(accountId) {
    const comment = await dbContext.Comments.find({ accountId: accountId }).populate('profile', 'name picture')
    return comment
  }
  async getCommentsById(commentId) {
    const comment = await dbContext.Comments.findById(commentId).populate('profile', 'picture name')
    return comment
  }
  getComments() {
    const comment = dbContext.Comments.find().populate('profile', 'picture name')
    return comment
  }
  async postComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('profile', 'picture name')
    return comment
  }

}

export const commentsService = new CommentsService()