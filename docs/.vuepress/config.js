module.exports = {
  title: 'ZYQ',
  description: '专注于记录技术点滴',
  themeConfig: {
    nav: [
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'CSS', link: '/css/' },
      { text: '其他', link: '/other/' },
      { text: 'Github', link: 'https://github.com/zyq190308' },
    ],
    sidebar: {
      '/vue/': [
        '',
        'about'
      ],
      '/react/': [
        '',
        'react'
      ],
      '/css/': [
        ''
      ],
      '/other/': [
        ''
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}