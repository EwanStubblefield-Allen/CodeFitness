import { pictureApi } from "./AxiosService.js"

class PicturesService {
  async getPictures(name) {
    const res = await pictureApi.get(`search?query=${name}`)
    return res.data.photos[0].src.landscape
  }
}

export const picturesService = new PicturesService()