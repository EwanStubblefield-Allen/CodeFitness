export class Achievement {
  constructor(data) {
    this.id = data.id
    this.name = this.computedDate(data.achievements.type)
    this.tier = data.tier
    this.progress = data.progress
    this.achievementId = data.achievementId
    this.requirement = data.achievements.requirement
    this.type = data.achievements.type
    this.achievementTier = data.achievements.tiers
  }

  computedDate(input) {
    return input.replace(/([A-Z])/gm, ` $1`).replace(/(^.)/gm, String.call.bind(input.toUpperCase))
  }
}