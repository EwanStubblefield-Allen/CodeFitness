export class Activity {
  constructor(data) {
    this.id = data.id
    this.name = this.computedData(data.name)
    this.picture = data.picture
    this.instructions = data.instructions
    this.muscle = this.computedData(data.muscle)
    this.equipment = this.computedData(data.equipment)
    this.difficulty = this.computedData(data.difficulty)
    this.type = this.computedData(data.type)
    this.level = data.level
    this.sets = data.sets
    this.reps = data.reps
    this.weight = data.weight
    this.checked = data.checked || false
  }

  computedData(input) {
    return input.replaceAll(/[_\-$]/g, ' ').replaceAll(/(?<=[-\s]).|^./gm, String.call.bind(input.toUpperCase))
  }
}