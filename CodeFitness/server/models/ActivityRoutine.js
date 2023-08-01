import { Schema } from "mongoose";

export const ActivityRoutineSchema = new Schema({
  activityId: {type: Schema.Types.ObjectId, required: true, ref:""}
})