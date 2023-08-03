import { Schema } from "mongoose";

export const AchievementSchema = new Schema({
  // routineCount
  type: {
    type: String,
    required: true
  },
  requirement: {
    type: Number,
    required: true
  },
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })

AchievementSchema.virtual('tier', {
  localField: '_id',
  foreignField: 'achievementId',
  ref: 'Tier'
})