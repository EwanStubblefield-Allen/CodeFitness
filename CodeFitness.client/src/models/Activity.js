export class Activity {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.instructions = data.instructions
    this.muscle = this.computedDate(data.muscle)
    this.equipment = this.computedDate(data.equipment)
    this.difficulty = this.computedDate(data.difficulty)
    this.type = this.computedDate(data.type)
    this.level = data.level
    this.sets = data.sets
    this.reps = data.reps
    this.weight = data.weight
  }

  computedDate(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).replace('_', ' ')
  }
}