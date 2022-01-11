import VideoListItem from './components/VideoListItem/VideoListItem'
import { VideoListProps } from './interface'

const VideoList = ({ onVideoSelect, videos }: VideoListProps) => {
  const videoItems = videos?.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  })

  return <ul className="col-md-4 list-group">{videoItems}</ul>
}

export default VideoList
