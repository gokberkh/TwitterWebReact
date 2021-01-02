import React from 'react'

import Button from './button'
import styles from './navigation-button.module.css'

function NavButton({ children }) {
  return <Button className={styles.navButton}>{children}</Button>
}

export default NavButton
