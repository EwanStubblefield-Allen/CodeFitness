import { Schema } from "mongoose";

export const RoutineSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Account"
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
  },
  public: {
    type: Boolean,
    default: false
  },
  completeCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

RoutineSchema.virtual('profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

RoutineSchema.virtual('activity', {
  localField: '_id',
  foreignField: 'routineId',
  justOne: false,
  ref: 'Activity'
})