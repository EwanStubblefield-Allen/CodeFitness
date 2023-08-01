import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    coverImg: {type: String, required: true},
    bio: {type: String, required: true},
    community: {type: String, enum:['Cardio Kings, Weight Warriors, Legion of Leisure'] },
    points: {type: Number, default: 0 }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

