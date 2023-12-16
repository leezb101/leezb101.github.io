import type {DocsThemeConfig} from 'nextra-theme-docs'
import {useRouter} from 'next/router'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/leezb101'
  },
  docsRepositoryBase: 'https://github.com/leezb101/leezb101.github.io',
  useNextSeoProps() {
    const {asPath} = useRouter()
    if (asPath !== '/') {
      return  {
        titleTemplate: '%s - 个人博客和笔记'
      }
    }
  },
  editLink: {
    text: '在Github上编辑此页面 →'
  },
  feedback: {
    content: '意见反馈 →'
  },
  footer: {
    text: 'MIT 2023 ©️ Leezb101'
  }
}

export default config
