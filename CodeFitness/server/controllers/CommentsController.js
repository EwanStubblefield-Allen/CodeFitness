import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router

      .get('', this.getComments)
      .get('/:commentId', this.getCommentsById)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.postComment)
      .put('/:commentId', this.editComment)
      .delete('/:commentId', this.removeComment)



  }
  async removeComment(req, res, next) {
    try {
      const commentId = req.params.commentId
      const userId = req.userInfo.id
      const comment = await commentsService.removeComment(commentId, userId)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }
  async editComment(req, res, next) {
    try {
      const commentId = req.params.commentId
      const userId = req.userInfo.id
      const commentData = req.body
      const comment = await commentsService.editComment(commentId, userId, commentData)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }
  async getCommentsById(req, res, next) {
    try {
      const commentId = req.params.commentId
      const comment = await commentsService.getCommentsById(commentId)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }
  async getComments(req, res, next) {
    try {
      const comment = await commentsService.getComments()
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }
  async postComment(req, res, next) {
    try {
      const commentData = req.body
      commentData.accountId = req.userInfo.id
      const comment = await commentsService.postComment(commentData)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }
}