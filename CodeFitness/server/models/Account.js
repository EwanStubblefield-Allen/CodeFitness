import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    // NOTE If you wish to add additional properties do so here
    coverImg: { type: String, minlength: 3, maxlength: 300, default: 'https://plus.unsplash.com/premium_photo-1687672031143-9d430c8e7d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    bio: { type: String, minlength: 10, maxlength: 1000 },
    community: { type: String, enum: ['Cardio Kings, Weight Warriors, Legion of Leisure'] },
    points: { type: Number, default: 0 }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)