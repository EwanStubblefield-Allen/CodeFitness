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
    enum: ['src/assets/img/achievement/routineCountT1.png', 'src/assets/img/achievement/routineCountT2.png', 'src/assets/img/achievement/routineCountT3.png', 'src/assets/img/achievement/routineCountT4.png', 'src/assets/img/achievement/levelCountT1.png', 'src/assets/img/achievement/levelCountT2.png', 'src/assets/img/achievement/levelCountT3.png', 'src/assets/img/achievement/levelCountT4.png', 'src/assets/img/achievement/pointCountT1.png', 'src/assets/img/achievement/pointCountT2.png', 'src/assets/img/achievement/pointCountT3.png', 'src/assets/img/achievement/pointCountT4.png', 'src/assets/img/achievement/routineCountT1.png', 'src/assets/img/achievement/routineCountT2.png', 'src/assets/img/achievement/routineCountT3.png', 'src/assets/img/achievement/routineCountT4.png'],
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