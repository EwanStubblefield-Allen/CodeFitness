import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService.js";
import BaseController from "../utils/BaseController.js";

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getComments)
      .get('/:commentId', this.getCommentById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .put('/:commentId', this.updateComment)
      .delete('/:commentId', this.removeComment)
  }

  async getComments(req, res, next) {
    try {
      const comments = await commentsService.getComments()
      return res.send(comments)
    } catch (error) {
      next(error);
    }
  }

  async getCommentById(req, res, next) {
    try {
      const comment = await commentsService.getCommentById(req.params.commentId)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }

  async createComment(req, res, next) {
    try {
      const commentData = req.body
      commentData.accountId = req.userInfo.id
      const comment = await commentsService.createComment(commentData)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }

  async updateComment(req, res, next) {
    try {
      const commentData = req.body
      commentData.id = req.params.commentId
      commentData.accountId = req.userInfo.id
      const comment = await commentsService.updateComment(commentData)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }

  async removeComment(req, res, next) {
    try {
      const commentData = {}
      commentData.id = req.params.commentId
      commentData.accountId = req.userInfo.id
      const comment = await commentsService.removeComment(commentData)
      return res.send(comment)
    } catch (error) {
      next(error);
    }
  }
}