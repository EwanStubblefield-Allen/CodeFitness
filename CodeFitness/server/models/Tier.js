import { Schema } from "mongoose";

export const TierSchema = new Schema({
  achievementId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Achievement"
  },
  name: {
    type: Array,
    required: true
  },
  picture: {
    type: Array,
    required: true
  },
  description: {
    type: Array,
    required: true
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})