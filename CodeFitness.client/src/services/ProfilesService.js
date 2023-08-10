import { AppState } from "../AppState.js";
import { Profile } from '../models/Profile.js'

class ProfilesService {

  getActiveProfile(profileId) {
    let foundProfile = AppState.communityProfiles.find(p => p.id == profileId)
    AppState.activeProfile = new Profile(foundProfile)
  }



}

export const profilesService = new ProfilesService()