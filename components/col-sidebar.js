import React from 'react'
import cn from 'classnames'
import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'
import styles from './col-sidebar.module.css'
import TweetModal from './tweet-modal'

function Layout({ flat }) {
  return (
    <div className={cn([styles.sidebar])}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>

      {/*tweet popup*/}
      <TweetModal></TweetModal>
      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default Layout
