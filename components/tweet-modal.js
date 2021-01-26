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
      //json-server --watch db.json --port 3004
      //post method

      const response = await fetch(' http://localhost:3004/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          favorite_count: 1,
          retweet_count: 11,
          favorited: true,
          retweet: true,
          created_at: 'Thu Jan 21 22:00:00 +0000 2021',
          id_str: '850006245121695744',
          text: tweet,
          user: {
            id: 2244994945,
            name: 'Gokberk H',
            screen_name: 'gokberkh',
            profile_image_url_https:
              'https://avatars0.githubusercontent.com/u/25930033?s=400&u=b4daefc78faea6f9d8a6bfdb7bdc1ed566453fd5&v=4',
            location: 'Internet',
            url: 'https://dev.twitter.com/',
            description:
              'Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://twittercommunity.com/ \u2328\ufe0f #TapIntoTwitter'
          }
        })
      })

      tweetSet('')
      onModalClose()

      if (response.status !== 201) throw 'Twet gönderilemedi.'
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
