import { Schema } from "mongoose";

export const CommentSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Account'
  },
  body: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 300
  },
  community: {
    type: String,
    required: true,
    enum: ['Cardio Kings', 'Weight Warriors', 'Legion of Leisure']
  },
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