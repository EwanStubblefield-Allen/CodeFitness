import { Schema } from "mongoose";

export const CommentSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Account'
  },
  routineId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Routine'
  },
  body: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 300
  }
}, {
  timeStamps: true,
  toJSON: { virtuals: true }
})

CommentSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})