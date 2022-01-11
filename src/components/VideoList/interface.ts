import { Video } from '../../@types'

export interface VideoListProps {
  onVideoSelect: (selectedVideo: Video) => void
  videos: Video[]
}
