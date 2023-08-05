import { logger } from "../utils/Logger.js"
import { pictureApi } from "./AxiosService.js"

class PicturesService {
  async getPictures(name) {
    const res = await pictureApi.get(`search?query=${name}`)
    logger.log(res.data)
    const foundVideo = res.data.videos.find(v => v.width / v.height > 1)
    return foundVideo.video_files[1].link
    // return res.data.photos[0].src.landscape
  }
}

export const picturesService = new PicturesService()