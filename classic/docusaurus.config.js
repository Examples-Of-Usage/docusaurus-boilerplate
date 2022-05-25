// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const packageJson = require('./package.json');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const additonalInfo = {
  generator: 'Docusaurus',
  lastBuildTime: `${new Date().toLocaleString('ru-RU', {timeZone: 'Asia/Yerevan'})} (Asia/Yerevan)`,
  websiteVersion: packageJson.version,
  boilerplateVersion: packageJson._boilerplateVersion,
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lox Lava',
  tagline: 'Psakecin Maroin Tvin Choban Karoin',
  url: 'https://lox-lava.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Ruben-Arushanyan', // Usually your GitHub org/user name.
  projectName: 'lox-lava', // Usually your repo name.

  customFields: {
    description: 'Descrtiption for meta tag',
    additonalInfo,
  },

  plugins: [
    // [
    //   'pwa',
    //   {
    //     debug: false,
    //     offlineModeActivationStrategies: [
    //       'appInstalled',
    //       'standalone',
    //       'queryString',
    //     ],
    //     // swRegister: false,
    //     swCustom: require.resolve('./src/sw.js'),
    //     pwaHead: [
    //       {
    //         tagName: 'link',
    //         rel: 'icon',
    //         href: 'img/logo.svg',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'manifest',
    //         href: 'manifest.json',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'theme-color',
    //         content: 'rgb(37, 194, 160)',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'apple-mobile-web-app-capable',
    //         content: 'yes',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'apple-mobile-web-app-status-bar-style',
    //         content: '#000',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'apple-touch-icon',
    //         href: 'img/logo.svg',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'mask-icon',
    //         href: 'img/logo.svg',
    //         color: 'rgb(62, 204, 94)',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'msapplication-TileImage',
    //         content: 'img/logo.svg',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'msapplication-TileColor',
    //         content: '#000',
    //       },
    //     ],
    //   },
    // ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/',
        },
        // blog: false,
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Lox Lava Blog',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/Ruben-Arushanyan/lox-lava/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'lox, lava, maro, karo',
        },
      ],
      navbar: {
        title: 'Lox Lava',
        logo: {
          alt: 'Lox Lava Logo',
          src: 'img/logo.svg',
        },
        items: [
          // left
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },

          // right
          {
            href: 'https://github.com/Ruben-Arushanyan/lox-lava',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/RubenArushanyan',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Ruben-Arushanyan/lox-lava',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ruben Arushanyan`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
