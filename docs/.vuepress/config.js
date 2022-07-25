const headConf = require("./config/headConf")
const moment = require('moment');
module.exports = {
    title: '爱卷卷同学',
    description:'homeassit爱好者 硬件爱好者',
    head: headConf,
   







  
    plugins:[// 插件部分
      [
        '@vuepress/last-updated',   
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            moment.locale(lang)
            return moment(timestamp).format("LLLL")
          }
        }
      ]
    ],
    '@vssue/vuepress-plugin-vssue': { // 调用评论插件
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'pigwithconcussion',
      repo: 'Blog',
      clientId: '36876b77c6eb8c0ffc4c',
      clientSecret: '53e5eac2708be0b1c05bffa8e6d705132849e2fd',
    },








    themeConfig: { // 主题设置
      lastUpdated: '更新时间',  // 最后更新时间 利用了git提交
      logo: '/assets/img/logo.png', // 位于左上角
          // 导航栏
      nav: [ 
        { text: '首页', link: '/' }, 
        { text: '项目经历', link: '/about/' },
        {
            text: '嵌入式',
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
        { text: '社交', link: 'https://www.bilibili.com/video/BV1Vq4y1c7hB?spm_id_from=333.999.0.0&vd_source=9963d9549e87b97b0bc947ea289e8f72' }, // 网页跳转 
      ],
      siderbar:[
        '',
        'about',
        'about1'
      ]
    }

  }