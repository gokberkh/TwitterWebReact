import React from 'react'
import Photo from '../photo'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/*avatar*/}
      <div className={styles.avatar}>
        <Photo></Photo>
      </div>
      {/*avatar*/}
      <div className={styles.body}>
        <header className={styles.header}>
          {name} @{slug} ·{formatDistanceToNowStrict(datetime)}
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>footer</footer>
      </div>
    </article>
  )
}

export default Tweet
