import React from 'react'
import Photo from './photo'
import styles from './tweet-modal.module.css'

import Stack from './stack'
import IconButton from './icon'
import ThemeButton from './theme-button'

import { Close } from './icons'

function TweetModal({ onModalClose = () => {}, onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState('')

  const onSubmit = async () => {
    try {
      const response = await fetch('/api/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tweet })
      })
      if (response.status !== 200) throw 'Twet gönderilemedi.'

      tweetSet('')
      onModalClose()
    } catch (e) {
      console.log(e)
    }
  }

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
              value={tweet}
              onChange={(e) => tweetSet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton onClick={onSubmit}>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default TweetModal
