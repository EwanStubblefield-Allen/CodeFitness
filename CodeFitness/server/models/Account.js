import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{
      type: String,
      unique: true
    }],
    email: {
      type: String,
      lowercase: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String
    },
    // NOTE If you wish to add additional properties do so here
    coverImg: {
      type: String,
      minlength: 3,
      maxlength: 300,
      default: 'https://images.unsplash.com/photo-1522506209496-4536d9020ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW4lMjBoaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    bio: {
      type: String,
      minlength: 10,
      maxlength: 1000
    },
    community: {
      type: String,
      enum: ['Cardio Kings', 'Weight Warriors', 'Legion of Leisure']
    },
    points: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)