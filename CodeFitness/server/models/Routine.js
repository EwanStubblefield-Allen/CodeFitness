import { Schema } from "mongoose";


export const RoutineSchema = new Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  public: { type: Boolean, default: false },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: "Account" }
}, {
  timestamps: true, toJSON: { virtuals: true }
}
)
