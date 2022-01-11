import React from 'react'
import { Video } from '../@types'

export interface AppPropTypes {
  videos: Video[]
  selectedVideo: Video
  videoId: string
  setSelectedVideo: React.Dispatch<React.SetStateAction<Video>>
  videoSearch: (term: string) => void
}
