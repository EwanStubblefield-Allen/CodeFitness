import { Schema } from "mongoose";

export const EmoteSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  commentId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  emote: {
    type: String,
    enum: ['../assets/img/routineCountT1.png', '../assets/img/routineCountT2.png', '../assets/img/routineCountT3.png', '../assets/img/routineCountT4.png', '../assets/img/levelCountT1.png', '../assets/img/levelCountT2.png', '../assets/img/levelCountT3.png', '../assets/img/levelCountT4.png', '../assets/img/pointCountT1.png', '../assets/img/pointCountT2.png', '../assets/img/pointCountT3.png', '../assets/img/pointCountT4.png', '../assets/img/routineCountT1.png', '../assets/img/routineCountT2.png', '../assets/img/routineCountT3.png', '../assets/img/routineCountT4.png'],
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

EmoteSchema.index({
  accountId: 1,
  commentId: 1
}, {
  unique: true
})

EmoteSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})