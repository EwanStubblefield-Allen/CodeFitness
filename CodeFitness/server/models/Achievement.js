import { Schema } from "mongoose";

export const AchievementSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
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