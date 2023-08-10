import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RoutineSchema } from "../models/Routine.js";
import { AchievementSchema } from "../models/Achievement.js";
import { AccountAchievementSchema } from "../models/AccountAchievment.js";
import { ActivitySchema } from "../models/Activity.js";
import { TierSchema } from "../models/Tier.js";
import { CopyRoutineSchema } from '../models/CopyRoutine.js';
import { CommentSchema } from "../models/Comment.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Routines = mongoose.model('Routine', RoutineSchema)
  CopyRoutines = mongoose.model('CopyRoutine', CopyRoutineSchema)
  Achievements = mongoose.model('Achievement', AchievementSchema)
  AccountAchievements = mongoose.model('AccountAchievement', AccountAchievementSchema)
  Activities = mongoose.model('Activity', ActivitySchema)
  Tiers = mongoose.model('Tier', TierSchema)

  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()