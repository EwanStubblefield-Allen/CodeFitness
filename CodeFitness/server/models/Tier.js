import { Schema } from "mongoose";

export const TierSchema = new Schema({
  achievementId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Achievement"
  },
  tier: {
    type: Number,
    required: true
  },
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
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})