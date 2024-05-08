import * as path from 'path';
import {defineConfig} from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Module federation',
  description:
    'Module Federation is a concept that allows developers to share code and resources across multiple JavaScript applications',
  icon: '/svg.svg',
  globalStyles: path.join(__dirname, 'theme/index.css'),
  logo: {
    light: '/module-federation.svg',
    dark: '/module-federation-logo-white.svg',
  },
  markdown: {
    checkDeadLinks: true,
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/module-federation/core',
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/T8c6yAxkbv',
      },
    ],
    footer: {
      message: 'Powered by Rspress',
    }
  },
});