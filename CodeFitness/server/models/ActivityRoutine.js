import { Schema } from "mongoose";

export const ActivityRoutineSchema = new Schema({
  routineId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Routine"
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 0
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
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

ActivityRoutineSchema.virtual('routine', {
  localField: 'routineId',
  foreignField: '_id',
  justOne: true,
  ref: 'Routine'
})