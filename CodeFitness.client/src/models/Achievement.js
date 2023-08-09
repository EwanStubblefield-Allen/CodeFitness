export class Achievement {
  constructor(data) {
    this.id = data.id
    this.name = this.computedDate(data.achievement.type)
    this.tier = data.tier
    this.progress = data.progress
    this.achievementId = data.achievementId
    this.requirement = data.achievement.requirement
    this.type = data.achievement.type
    this.achievementTier = data.achievement.tier
  }

  computedDate(input) {
    return input.replace(/([A-Z])/gm, ` $1`).replace(/(^.)/gm, String.call.bind(input.toUpperCase))
  }
}