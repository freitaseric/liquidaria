import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getAbsolutePath(value: string) {
  return path.dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  stories: ['../../../packages/react/src/**/*.stories.@(ts|tsx)'],

  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
  ],

  framework: getAbsolutePath('@storybook/react-vite'),

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@liquidaria/tokens': path.resolve(__dirname, '../../../packages/tokens/src/index.ts'),
          '@liquidaria/react': path.resolve(__dirname, '../../../packages/react/src/index.ts'),
        },
      },
    })
  },

  core: {
    disableWhatsNewNotifications: true
  }
}

export default config