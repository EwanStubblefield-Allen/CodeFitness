export class Profile {
  constructor(data) {
    this.id = data._id
    this.picture = data.picture
    this.name = data.name
    this.points = data.points
  }
}