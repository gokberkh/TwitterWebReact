const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs'],
  presets: [path.resolve(__dirname, './next-preset.js')]
}
