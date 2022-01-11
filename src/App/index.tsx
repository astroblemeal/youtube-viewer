import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'
import { withApp } from './withApp'
import SearchBar from '../components/SearchBar/SearchBar'
import { AppPropTypes } from './interface'

function App({
  videos,
  videoSearch,
  selectedVideo,
  setSelectedVideo,
}: AppPropTypes) {
  return (
    <>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList
        onVideoSelect={(selectedVideo) => setSelectedVideo(selectedVideo)}
        videos={videos}
      />
    </>
  )
}

export default withApp(App)
