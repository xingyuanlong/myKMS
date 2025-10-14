<template>
  <div class="vp-collapse">
    <div
      class="vp-collapse__summary"
      :class="{ 'vp-collapse__summary--open': open }"
      @click="toggle"
    >
      <slot name="summary">{{ open ? '▼' : '►' }} {{ open ? '折叠' : '展开' }} </slot>
    </div>
    <div
      class="vp-collapse__content"
      v-show="open"
      ref="contentRef"
      :style="contentStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue'

const open = ref(false)
const contentRef = ref<HTMLElement | null>(null)
const contentStyle = ref<Record<string, string>>({})

function toggle() {
  open.value = !open.value
}

// 为了做折叠动画，我们可以测量内容高度
watch(open, async (val) => {
  await nextTick()
  const el = contentRef.value
  if (el) {
    if (val) {
      // 展开：从 height = 0 到 scrollHeight
      const scrollH = el.scrollHeight
      contentStyle.value = {
        height: '0px',
        overflow: 'hidden',
      }
      // 强制重绘，确保 CSS transition 生效
      void el.offsetHeight
      contentStyle.value = {
        height: scrollH + 'px',
        overflow: 'hidden',
      }
      // 最终移除 height，让内容自动适应（可选）
      setTimeout(() => {
        if (open.value) {
          contentStyle.value = {
            height: 'auto',
          }
        }
      }, 300) // 300ms 应该和 CSS 过渡时长一致
    } else {
      // 折叠：从当前高度到 0
      const curH = el.clientHeight
      contentStyle.value = {
        height: curH + 'px',
        overflow: 'hidden',
      }
      // 强制重绘
      void el.offsetHeight
      contentStyle.value = {
        height: '0px',
        overflow: 'hidden',
      }
    }
  }
})
</script>

<style scoped>
.vp-collapse {
  
  margin: 0.5em 0;
}
.vp-collapse__summary {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  background-color: var(--vp-c-page-background);
  user-select: none;
}
.vp-collapse__icon {
  margin-left: 0.5em;
}
.vp-collapse__content {
  transition: height 0.3s ease;
  padding: 0.5em;
  background-color: #f9f9f9;
  border-radius: 5px;
}
</style>
