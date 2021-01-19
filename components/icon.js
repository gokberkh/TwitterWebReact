import React from 'react'
import Button from './button'
import styles from './button.module.css'
import cn from 'classnames'

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  )
}

export default IconButton
