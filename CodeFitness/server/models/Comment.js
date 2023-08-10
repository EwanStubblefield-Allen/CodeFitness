import { Schema } from "mongoose";

export const CommentSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Account'
  }
})