import { Schema } from "mongoose";

export const ActivityRoutineSchema = new Schema({
  routineId: {type: Schema.Types.ObjectId, required: true, ref: "Routine"},
  name: {type: String, required: true,},
  level: {type: Number, default: 0},
  activityType: {type: String, required: true},
  image: {type: String, },
  equipment: {type: String, },
  muscle: {type: String},
  },  {
    timestamps: true, toJSON: { virtuals: true }}) 