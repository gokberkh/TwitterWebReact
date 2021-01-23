import React from 'react'
import Photo from './photo'
import styles from './tweet-modal.module.css'
import Stack from './stack'
import IconButton from './icon'
import ThemeButton from './theme-button'
function TweetModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              name=""
              rows="4"
              placeholder="Ne düşünüyorsun"
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close}></IconButton>
            <ThemeButton>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
