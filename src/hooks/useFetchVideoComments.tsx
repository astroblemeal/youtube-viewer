import { useEffect, useState } from 'react'
import axios from 'axios'
import { YOUTUBE_API_KEY } from '../constants'
import { Item } from '../@types'

export const useFetchVideoComments = (videoId: string): Item[] => {
  const fetchUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2C%20snippet%2C%20replies&videoId=${videoId}&key=${YOUTUBE_API_KEY}`
  const [commentsById, setCommentsById] = useState<Item[]>()

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      const videoComment = response.data.items
      setCommentsById(videoComment)
    })
  }, [videoId, fetchUrl])

  return commentsById
}
