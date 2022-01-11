import { VideoDisplayProps } from './interface'

function VideoDisplay({ video, url }: VideoDisplayProps) {
  return (
    <>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={video?.snippet?.title}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{video?.snippet?.title}</div>
        <div>{video?.snippet?.description}</div>
      </div>
    </>
  )
}

export default VideoDisplay
