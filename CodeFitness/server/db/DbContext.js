import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RoutineSchema } from "../models/Routine.js";
import { AchievementSchema } from "../models/Achievement.js";
import { AccountAchievementSchema } from "../models/AccountAchievement.js";
import { ActivitySchema } from "../models/Activity.js";
import { TierSchema } from "../models/Tier.js";
import { CommentSchema } from "../models/Comment.js";
import { CommunityRoutineSchema } from '../models/CommunityRoutine.js';
import { EmoteSchema } from '../models/Emote.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Routines = mongoose.model('Routine', RoutineSchema)
  CommunityRoutines = mongoose.model('CommunityRoutine', CommunityRoutineSchema)
  Achievements = mongoose.model('Achievement', AchievementSchema)
  AccountAchievements = mongoose.model('AccountAchievement', AccountAchievementSchema)
  Activities = mongoose.model('Activity', ActivitySchema)
  Tiers = mongoose.model('Tier', TierSchema)
  Comments = mongoose.model('Comment', CommentSchema)
  Emotes = mongoose.model('Emote', EmoteSchema)
}

export const dbContext = new DbContext()