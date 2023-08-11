import { Schema } from "mongoose";

export const CommunityRoutineSchema = new Schema({
  community: {
    type: String,
    enum: ['Cardio Kings', 'Weight Warriors', 'Legion of Leisure'],
    required: true
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true
  },
  picture: {
    type: String,
    minlength: 3,
    maxlength: 300,
    required: true
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 1000,
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

CommunityRoutineSchema.virtual('activity', {
  localField: '_id',
  foreignField: 'routineId',
  ref: 'Activity'
})