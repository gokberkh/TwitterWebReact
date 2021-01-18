import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({
  src = 'https://avatars0.githubusercontent.com/u/25930033?s=400&u=b4daefc78faea6f9d8a6bfdb7bdc1ed566453fd5&v=4',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}

export default Photo
