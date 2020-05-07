module.exports = {
  title: 'Instant OpenHIE',
  tagline: 'Simplifying OpenHIE Setup',
  url: 'https://openhie.github.io',
  baseUrl: '/instant/',
  favicon: 'img/favicon.ico',
  organizationName: 'openhie',
  projectName: 'instant',
  themeConfig: {
    algolia: {
      apiKey: '43dfdd6f76217eafc0e68ada109a0251',
      indexName: 'instant',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    navbar: {
      title: 'Instant OpenHIE',
      logo: {
        alt: 'Instant OpenHIE Logo',
        src: 'img/IOHIE-icon-medium.png'
      },
      links: [
        { to: 'docs/introduction/vision', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/openhie/instant',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'OpenHIE',
              href: 'https://ohie.org/'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenHIE`
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl')
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
