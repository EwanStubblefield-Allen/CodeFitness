import { Schema } from "mongoose";

export const AccountAchievementSchema = new Schema({
  achievementId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Achievement"
  },
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Account"
  },
  progress: {
    type: Number,
    default: 0
  },
  tier: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

AccountAchievementSchema.index({
  accountId: 1,
  achievementId: 1
}, {
  unique: true
})

AccountAchievementSchema.virtual('achievements', {
  localField: 'achievementId',
  foreignField: '_id',
  justOne: true,
  ref: 'Achievement'
})