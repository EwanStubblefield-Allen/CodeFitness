import Axios from 'axios'
import { baseURL } from '../env'
import { logger } from '../utils/Logger.js'

export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const activityApi = Axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/',
  headers: { 'X-Api-Key': 'Ayh9Fz4WaGOn40+RojiX1A==tUPKH12n69NwXjlx' },
  timeout: 8000
})

export const pictureApi = Axios.create({
  // baseURL: 'https://customsearch.googleapis.com/customsearch/v1',

  baseURL: 'https://api.pexels.com/videos/',
  headers: { 'Authorization': 'uvMRboBqFGX0nUAxq6yoLvvO4dXCmqTuREGtQ2PqdtK3AfR3qDwNUcwb' },
  timeout: 8000
})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}