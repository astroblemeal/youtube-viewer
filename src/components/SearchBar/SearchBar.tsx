import AvatarIcon from '../../icons/AvatarIcon'
import SearchIcon from '../../icons/SearchIcon'
import YouTubeIcon from '../../icons/YouTubeIcon'
import { SearchBarProps } from './interface'
import styles from './searchBarStyle.module.css'
import { withSearchBar } from './withSearchBar'

function SearchBar({ term, onInputChange }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <div className={styles.headerLeft}>
        <YouTubeIcon width="50" height="50" fill="red" />
      </div>
      <div className={styles.headerInput}>
        <input
          value={term}
          onChange={(event) => onInputChange(event.target.value)}
        />
        <SearchIcon width="15" height="15" fill="black" additionalClass="" />
      </div>
      <div className={styles.headerIcons}>
        <AvatarIcon height={30} width={30} />
      </div>
    </div>
  )
}

export default withSearchBar(SearchBar)
