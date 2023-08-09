import { logger } from "../utils/Logger.js"
import { pictureApi } from "./AxiosService.js"

class PicturesService {
  async getPictures(name) {
    const res = await pictureApi.get(`?key=AIzaSyAG2TXtbKXMKVwK02ThWBoFlvfFudMLTr4&cx=13d92f08b023f4a88&searchType=image&q=${name}+exercise+instruction`)
    // logger.log(res.data.items[0].link)
    return res.data.items[0].link
    // const foundVideo = res.data.videos.find(v => v.width / v.height > 1)

    // if (!foundVideo) {
    //   return ''
    // }
    // return foundVideo.video_files[0].link
    // return res.data.photos[0].src.landscape
  }
}

export const picturesService = new PicturesService()