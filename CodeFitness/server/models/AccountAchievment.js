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
    required: true
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
  achiementId: 1,
  accountId: 1
}, {
  unique: true
})

AccountAchievementSchema.virtual('achievement', {
  localField: 'achievementId',
  foreignField: '_id',
  justOne: true,
  ref: 'Achievement'
})

AccountAchievementSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})