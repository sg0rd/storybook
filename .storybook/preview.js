/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    github: {
      baseURL: "https://github.com/sg0rd/",
      repository: "storybook",
      branch: "master",
    },
  },
};

export default preview;
