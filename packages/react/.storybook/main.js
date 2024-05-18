module.exports = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
  ],
  docs: {
    autodocs: true,
  },
};

// import { StorybookConfig } from "@storybook/react-vite";

// const config: StorybookConfig = {
//   framework: "@storybook/react-vite", // 👈 Add this
//   stories: ["../src/**/*.stories.tsx"],
//   addons: [
//     "@storybook/preset-typescript",
//     "@storybook/addon-storysource",
//     "@storybook/addon-knobs",
//     "@storybook/addon-a11y",
//   ],
// };

// export default config;
