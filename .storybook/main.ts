const react = require("@vitejs/plugin-react");
const defaultViteConfig = require("../vite.config").default;

module.exports = {
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here

    config.plugins = config.plugins.filter(
      (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes("vite:react"))
    );

    config.plugins.push(
      react({
        // exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      })
    );
    config.resolve.alias = defaultViteConfig.resolve.alias;
    config.optimizeDeps.esbuildOptions = defaultViteConfig.optimizeDeps.esbuildOptions;
    return config;
  },
};
