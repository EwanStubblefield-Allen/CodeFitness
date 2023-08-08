export class Achievement {
  constructor(data) {
    this.id = data.id
    this.tier = data.tier
    this.progress = data.progress
    this.achievementId = data.achievementId
    this.requirement = data.achievement.requirement
    this.type = data.achievement.type
    this.achievementTier = data.achievement.tier
  }
}