import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RoutineSchema } from "../models/Routine.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Routines = mongoose.model('Routine', RoutineSchema)
}

export const dbContext = new DbContext()
