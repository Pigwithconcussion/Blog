module.exports = {
    title: '爱卷卷同学',
    description:'homeassit爱好者 硬件爱好者',
    head: [
      ['link', { rel: 'icon', herf: '/favicon.ico' }], // favicon 使用绝对路径和相对路径都没有显示
      ['meta', { name: 'author', content: '爱卷卷同学' }],
      ['meta', { name: 'keyword', content: 'vuepress 介绍， vuepress说明' }],

    ],
    themeConfig: {
      lastUpdated: '更新时间',  // 最后更新时间
      logo: '/assets/img/logo.png', // 位于左上角
      nav: [  // 导航栏
        { text: '首页', link: '/' }, 
        { text: '作品集', link: '/about/' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [ // 下拉列表
              { text: 'Chinese', link: '/language/chinese/' }, 
              { text: 'Japanese', link: '/language/japanese/' },
              { text: 'Patrick', items:[ // 在此目录下在嵌套
                {text: 'Home',link: '/'},
                {text: 'Home',link: '/about'},
              ] }
            ]         
          },
        { text: 'External', link: 'https://www.bilibili.com/video/BV1Vq4y1c7hB?spm_id_from=333.999.0.0&vd_source=9963d9549e87b97b0bc947ea289e8f72' }, // 网页跳转 
      ],
      siderbar:[
        '',
        'about',
        'about1'
      ]
    }
  }