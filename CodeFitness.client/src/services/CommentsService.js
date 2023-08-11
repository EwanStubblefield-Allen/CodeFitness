import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService {
  async submitComment(editable) {
    const res = await api.post('api/comments', { body: editable })
    const newComment = new Comment(res.data)
    AppState.comments.push(newComment)
  }

  async getComments(communityId) {
    const res = await api.get(`api/communities/${communityId}/comments`)
    const comment = res.data.map(c => new Comment(c))
    AppState.comments = comment
  }
}

export const commentsService = new CommentsService()