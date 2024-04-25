module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  title: '小羽帮助中心',
  description: '小羽帮助中心',
  base: '/help-center/',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
        { text: '首页', link: '/' },
        // { text: 'Guide', link: '/guide/' },
        // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
        {
            title: '最新网址',   // 必要的
            path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          //   children: [
          //     '/'
          //   ]
        },
        {
          title: '常见问题',   // 必要的
          path: '/常见问题',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
        //   children: [
        //     '/'
        //   ]
        },
        // {
        //   title: '如何更新节点',
        //   path: '/如何更新节点',
        // //   children: [ /* ... */ ],
        //   initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        // }
      ]
    // sidebar: {
    //     '/foo/': [
    //         '',     /* /foo/ */
    //         'one',  /* /foo/one.html */
    //         'two'   /* /foo/two.html */
    //     ],
    
    //     '/bar/': [
    //         '',      /* /bar/ */
    //         'three', /* /bar/three.html */
    //         'four'   /* /bar/four.html */
    //     ],

    //     // '/Android/':[
    //     //     '',
    //     //     'client'
    //     // ],
    
    //     // fallback
    //     '/': [
    //         '',        /* / */
    //         'contact', /* /contact.html */
    //         'about'    /* /about.html */
    //     ],
    // },
    // sidebar: [
    //     '/',
    //     '/常见问题',
    //     'Android',
    //     ['/page-b', 'Explicit link text']
    // ],
    // displayAllHeaders: true
  }
}