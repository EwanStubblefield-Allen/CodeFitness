export class Profile {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.picture = data.picture
    this.coverImg = data.coverImg
    this.bio = data.bio
    this.community = data.community
    this.points = data.points
  }
}