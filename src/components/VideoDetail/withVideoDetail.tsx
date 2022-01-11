import { useFetchVideoComments } from '../../hooks/useFetchVideoComments'
import { VideoDetailProps } from './interface'

export const withVideoDetail = (Component: React.FC<VideoDetailProps>) => {
  function HOC({ video }) {
    const videoId = video?.id?.videoId
    const url = `https://www.youtube.com/embed/${videoId}`
    const commentsById = useFetchVideoComments(videoId)

    console.log('VIDEO', video)

    console.log(commentsById)
    const newProps = {
      url,
      video,
      commentsById,
    }

    return <Component {...newProps} />
  }
  return HOC
}
