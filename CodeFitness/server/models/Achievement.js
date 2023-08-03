import { Schema } from "mongoose";

export const AchievementSchema = new Schema({
  // routineCount
  type: {
    type: String,
    required: true
  },
  requirement: {
    type: Array,
    required: true
  },
},
  {
    timestamps: true,
    toJSON: { virtuals: true }
  })

AchievementSchema.index({
  type: 1
}, {
  unique: true
})

AchievementSchema.virtual('tier', {
  localField: '_id',
  foreignField: 'achievementId',
  ref: 'Tier'
})