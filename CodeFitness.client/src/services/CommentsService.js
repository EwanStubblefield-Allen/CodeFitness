import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { api } from "./AxiosService.js"

class CommentsService {

  async getComments(communityId) {
    const res = await api.get(`api/communities/${communityId}/comments`)
    AppState.comments = res.data.map(c => new Comment(c))
  }

  async createComment(editable) {
    const res = await api.post('api/comments', editable)
    AppState.comments.push(new Comment(res.data))
  }

  async editComment(commentData) {
    const res = await api.put(`api/comments/${commentData.id}`, commentData)
    const foundIndex = AppState.comments.findIndex(c => c.id == commentData.id)
    AppState.comments.splice(foundIndex, 1, new Comment(res.data))
  }

  async removeComment(commentId) {
    await api.delete(`api/comments/${commentId}`)
    AppState.comments = AppState.comments.filter(c => c.id != commentId)
  }
}

export const commentsService = new CommentsService()