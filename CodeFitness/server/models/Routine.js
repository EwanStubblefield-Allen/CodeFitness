import { Schema } from "mongoose";


export const RoutineSchema = new Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  public: { type: Boolean, default: true },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: "Account" }
}, {
  timestamps: true, toJSON: { virtuals: true }})

  RoutineSchema.virtual('profile', {
    localField: 'accountId',
    foreignField: '_id',
    justOne:true,
    ref:'Account'
  })

  RoutineSchema.virtual("activityCount",{

    localField: '_id',
    ref: 'ActivityRoutine',
    foreignField: 'id',
    count: true
  })
