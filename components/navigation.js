import React from 'react'

import NavButton from './navigation-button'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'

import styles from './navigation.module.css'

function Navigation({ children }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton>
        <Home />
        <span>Home</span>
      </NavButton>

      <NavButton>
        <Explore />
        <span>Explore</span>
      </NavButton>

      <NavButton>
        <Notification />
        <span>Notification</span>
      </NavButton>

      <NavButton>
        <Messages />
        <span>Messages</span>
      </NavButton>

      <NavButton>
        <Bookmark />
        <span>Bookmark</span>
      </NavButton>

      <NavButton>
        <Lists />
        <span>Lists</span>
      </NavButton>

      <NavButton>
        <Profile />
        <span>Profile</span>
      </NavButton>

      <NavButton>
        <More />
        <span>More</span>
      </NavButton>
    </nav>
  )
}

export default Navigation
