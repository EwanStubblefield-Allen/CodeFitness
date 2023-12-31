import { Schema } from "mongoose";

export const CopyRoutineSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'Account'
  },
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Account'
  },
  routineId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  completedCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

CopyRoutineSchema.virtual('author', {
  localField: 'authorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

CopyRoutineSchema.virtual('routine', {
  localField: 'routineId',
  foreignField: '_id',
  justOne: true,
  ref: 'Routine'
})

CopyRoutineSchema.virtual('communityRoutine', {
  localField: 'routineId',
  foreignField: '_id',
  justOne: true,
  ref: 'CommunityRoutine'
})

CopyRoutineSchema.virtual('activity', {
  localField: '_id',
  foreignField: 'routineId',
  justOne: false,
  ref: 'Activity'
})