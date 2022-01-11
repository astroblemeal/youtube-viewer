import { VideoCommentsProps } from './interface'
import styles from './videoCommentsStyle.module.css'

function VideoComments({ commentsById }: VideoCommentsProps) {
  return (
    <div className={styles.videoCommentsContainer}>
      {commentsById?.map((comment) => (
        <>
          <div className={styles.videoCommentsWrapper}>
            <img
              height={50}
              className={styles.videoCommentsUser}
              alt="avatar"
              src={
                comment?.snippet?.topLevelComment?.snippet
                  ?.authorProfileImageUrl
              }
            />
            <div className={styles.videoCommentsTextWrapper}>
              <span className={styles.authorDisplayName}>
                {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
              </span>
              <span>
                {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
              </span>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default VideoComments
