export class Activity {
  constructor(data) {
    this.name = data.name
    this.type = this.computedDate(data.type)
    this.muscle = this.computedDate(data.muscle)
    this.equipment = this.computedDate(data.equipment)
    this.difficulty = this.computedDate(data.difficulty)
    this.instructions = data.instructions
    this.picture = data.picture
  }

  computedDate(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).replace('_', ' ')
  }
}