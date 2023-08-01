import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RoutineSchema } from "../models/Routine.js";
import { AchievementSchema } from "../models/Achievement";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Routines = mongoose.model('Routine', RoutineSchema);
  Achievements = mongoose.model('Achievement', AchievementSchema)
}

export const dbContext = new DbContext()
