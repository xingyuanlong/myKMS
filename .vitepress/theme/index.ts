// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Collapse from './components/Collapse.vue'
import RandomQuestionModal from './components/RandomQuestionModal.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-before': () => h(RandomQuestionModal, { variant: 'nav' })
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Collapse', Collapse)
    app.component('RandomQuestionModal', RandomQuestionModal)
    // ...
  }
} satisfies Theme
