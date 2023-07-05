// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenDataCam',
  tagline: 'An open source tool to quantify the world',
  favicon: 'favicon/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://opendata.cam',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opendatacam', // Usually your GitHub org/user name.
  projectName: 'opendatacam-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      metadata: [
        { property: 'og:tile', content: 'OpenDataCam - An open source tool to quantify the world' },
        { property: 'og:description', content: "OpenDataCam is a tool that helps to quantify the world. With computer vision OpenDataCam understands and quantifies moving objects in videos. The simple setup allows everybody to start counting, cars, bicycles, sheeps and much more!" },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'OpenDataCam' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@OpenDataCam' },
        { name: 'twitter:title', content: 'OpenDataCam - An open source tool to quantify the world' },
        { name: 'twitter:description', content: 'OpenDataCam is a tool that helps to quantify the world. With computer vision OpenDataCam understands and quantifies moving objects in videos. The simple setup allows everybody to start counting, cars, bicycles, sheeps and much more!' },
        { name: 'twitter:image', content: 'img/seo.jpg' },
      ],
      image: 'img/seo.jpg',
      navbar: {
        title: 'OpenDataCam',
        logo: {
          alt: 'OpenDataCam Logo',
          src: 'img/logo.png',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },*/
          {
            href: 'https://github.com/opendatacam/opendatacam',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'OpenDataCam',
            items: [
              /*{
                label: 'Tutorial',
                to: '/docs/intro',
              },*/
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/opendatacam/opendatacam',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/opendatacam',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/opendatacam',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Imprint',
                href: '/imprint',
              },
              {
                label: 'Privacy Policy',
                href: '/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © 2017 - ${new Date().getFullYear()} OpenDataCam`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  
    plugins: [
      async function tailwindCssPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],
};

module.exports = config;
