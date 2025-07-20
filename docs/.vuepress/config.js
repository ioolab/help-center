import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  title: '小羽帮助中心',
  description: '小羽帮助中心',
  base: '/help-center/',
  theme: defaultTheme({
    logo: '/img/logo.png',
    navbar: [
        { text: '首页', link: '/' },
        // { text: 'Guide', link: '/guide/' },
        // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
        {
            text: '最新网址',   // 必要的
            link: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsible: false, // 可选的, 默认值是 true,
          //   children: [
          //     '/'
          //   ]
        },
        {
          text: '常见问题',   // 必要的
          link: '/常见问题',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsible: false, // 可选的, 默认值是 true,
        //   children: [
        //     '/'
        //   ]
        },
      ]
  })
})