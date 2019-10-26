module.exports = {
    title: 'CL',
    description: '乘凉的个人文档',
    port: 8081,
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '前端', link: '/前端/' },
            { text: '后端', link: '/后台/' },
            { text: '运维/服务器', link: '/运维/服务器/' },
            { text: '收藏', link: 'https://google.com' },
            {
                text: 'Languages',
                items: [
                    { text: '中文', link: '/language/chinese' },
                ]
            }
        ],
        sidebar: {
            '/前端/': [

            ],
            '/后台/': [
                'java基础'
            ],
            "/运维/服务器/": [
                'CentOS 7',
                'Docker'
            ]
        }
    },
}