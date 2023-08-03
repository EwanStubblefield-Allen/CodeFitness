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
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
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