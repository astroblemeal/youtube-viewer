import { useEffect, useState } from 'react'
import YTSearch from 'youtube-api-search'
import { YOUTUBE_API_KEY } from '../constants'
import { AppPropTypes } from './interface'

export const withApp = (Component: React.FC<AppPropTypes>) => {
  function HOC() {
    const [videos, setVideos] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null)
    const videoId = selectedVideo?.id?.videoId

    useEffect(() => {
      videoSearch('React server side components')
    }, [])

    const videoSearch = (term) => {
      YTSearch({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
        setVideos(videos)
        setSelectedVideo(videos[0])
      })
    }
    const newProps = {
      videos,
      videoId,
      videoSearch,
      selectedVideo,
      setSelectedVideo,
    }

    return <Component {...newProps} />
  }
  return HOC
}
