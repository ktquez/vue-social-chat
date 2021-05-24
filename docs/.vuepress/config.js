module.exports = {
  base: '/vue-social-chat/',
  theme: 'default-vue-a11y',
  title: 'Vue social chat',
  description: 'Vue.js component for your visitors and customers to send messages directly to you through social chats or customized form.',
  serviceWorker: true,
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }]
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
        sidebar: [
          {
            title: 'Getting Started',
            collapsable: false,
            children: [
              '/',
              '/setup-v2.md',
              '/setup-v3.md',
              '/props.md',
              '/slots.md',
              '/events.md'
            ]
          },
          {
            title: 'Demo',
            collapsable: false,
            children: [
              '/demo/whatsapp.md',
              '/demo/telegram.md',
              '/demo/messenger.md',
              '/demo/viber.md',
              '/demo/wechat.md',
              '/demo/line.md',
              '/demo/twitter.md',
              '/demo/mixed.md',
              '/demo/custom.md'
            ]
          }
        ]
      }
    }
  }
}