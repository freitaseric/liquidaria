/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: '../../packages/react/src/**/*.stories.@(ts|tsx)',
  base: '/liquidaria/',
  defaultStory: 'components-button--variants',
  appendToHead: '<title>Liquidaria Design System</title>',
}
