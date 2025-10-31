import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识库",
  description: "知识库",
  base: "/myKMS/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "面试", link: "/interview/code" },
      { text: "框架", link: "/knowledge/framework/react" },
      { text: "浏览器", link: "/knowledge/browser/http" },
    ],

    sidebar: [
      {
        text: "基础知识",
        items: [
          { text: "js", link: "/knowledge/base/js" },
          { text: "node", link: "/knowledge/base/nodejs" },
          { text: "css", link: "/knowledge/base/css" },
        ],
      },

      {
        text: "interview",
        items: [
          { text: "2025", link: "/interview/2025" },
          { text: "code", link: "/interview/code" },
          { text: "开放性问题", link: "/interview/index" },
        ],
      },

      {
        text: "框架",
        items: [
          { text: "react", link: "/knowledge/framework/react" },
          { text: "vue", link: "/knowledge/framework/vue" },
          { text: "工程化", link: "/knowledge/framework/vite" },
          { text: "electron", link: "/knowledge/framework/electron" },
        ],
      },
      {
        text: "浏览器",
        items: [
          { text: "browser", link: "/knowledge/browser/index" },
          { text: "http", link: "/knowledge/browser/http" },
          { text: "web安全", link: "/knowledge/browser/webSecurity" },
        ],
      },
      {
        text: "读书笔记",
        items: [{ text: "vue.js 设计与实践", link: "/book/vue_1" }],
      },
      {
        text: "算法",
        items: [{ text: "总", link: "/algorithm/index" }],
      },
      {
        text: "AI",
        items: [{ text: "ai", link: "/ai/index" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/xingyuanlong/myKMS" },
    ],
    outline: { level: [2, 3], label: "页面导航" },
  },
  vite: {
    plugins: [
      vueJsx(), // 启用 JSX 支持
    ],
  },
});
