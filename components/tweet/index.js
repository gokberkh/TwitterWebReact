import React from 'react'
import Photo from '../photo'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

import styles from './style.module.css'
import IconButton from '../icon'
import * as Icon from '../icons'

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
          <span className={styles.name}>{name} </span> <span>@{slug}</span> ·{' '}
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          {/* reply */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply></Icon.Reply>
            </IconButton>
            <span>5</span>
          </div>

          {/* retweet */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>58</span>
          </div>

          {/* like */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like></Icon.Like>
            </IconButton>
          </div>

          {/* share */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share></Icon.Share>
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
