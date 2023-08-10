import { dbContext } from "../db/DbContext.js"

class CommentsService {
  postComment(commentData) {
    const res = dbContext.Comments
  }

}

export const commentsService = new CommentsService()