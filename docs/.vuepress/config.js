module.exports = {
  theme: 'default-vue-a11y',
  title: 'Vue social chat',
  description: 'Vue.js component for your visitors and customers to send messages directly to you through social chats or customized form.',
  serviceWorker: true,
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    home: false,
    repo: 'ktquez/vue-social-chat',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        nav: [],
        sidebar: []
      }
    }
  }
}