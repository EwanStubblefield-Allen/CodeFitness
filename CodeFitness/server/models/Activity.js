import { Schema } from "mongoose";

export const ActivitySchema = new Schema({
  routineId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Routine"
  },
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Account"
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  picture: {
    type: String,
  },
  instructions: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  equipment: {
    type: String,
    required: true
  },
  muscle: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Expert'],
    required: true
  },
  level: {
    type: Number,
    default: 0
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    default: 1
  },
  weight: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

ActivitySchema.virtual('routine', {
  localField: 'routineId',
  foreignField: '_id',
  justOne: true,
  ref: 'Routine'
})