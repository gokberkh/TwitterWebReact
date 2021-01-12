import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Home } from '../components/icons'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import TitleBold from '../components/text-title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons',
  decorators: [withKnobs]
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

export const Nav = () => {
  const flat = boolean('Flat', false)

  return <Navigation flat={flat} selectedKey="home" />
}
