import React from 'react'
import { Home } from '../components/icons'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import TitleBold from '../components/text-title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>

export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Full Tweet</ThemeButton>
    <ThemeButton full big>
      Full Big Tweet
    </ThemeButton>
  </Stack>
)

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />
