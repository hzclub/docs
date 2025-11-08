import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: "H Personal Club",
  description: "A VitePress Site",
  themeConfig: {
    logo: 'https://vitepress.dev/vitepress-logo-large.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: '笔记', link: '/笔记' }
    ],

    sidebar: [
      {
        text: '全部',
        items: [
          { text: '区块链', link: '区块链' },
          { text: '补充', link: '补充' },
          { text: '常见问题', link: '常见问题' },
          { text: 'unocss', link: 'unocss' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
