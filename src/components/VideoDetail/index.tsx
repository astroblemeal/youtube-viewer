import VideoComments from '../VideoComments'
import VideoDisplay from './components/VideoDisplay/VideoDisplay'
import { VideoDetailProps } from './interface'
import { withVideoDetail } from './withVideoDetail'

const VideoDetail = ({ video, url, commentsById }: VideoDetailProps) => {
  if (!video) {
    return <div>Loading....</div>
  }

  return (
    <div className="video-detail col-md-8">
      <VideoDisplay url={url} video={video} />
      <VideoComments commentsById={commentsById} />
    </div>
  )
}

export default withVideoDetail(VideoDetail)
