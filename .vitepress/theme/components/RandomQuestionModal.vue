<template>
  <div :class="containerClasses">
    <button
      type="button"
      :class="triggerClasses"
      @click="openModal"
    >
      🎯 随机一题
    </button>

    <Teleport to="body">
      <div
        v-if="modalOpen"
        class="random-question__overlay"
        role="dialog"
        aria-modal="true"
        @click.self="closeModal"
      >
        <div class="random-question__modal">
          <header class="random-question__header">
            <div>
              <p class="random-question__eyebrow">Interview Drill</p>
              <h3>随机一题</h3>
            </div>
            <button
              type="button"
              class="random-question__icon-button"
              aria-label="关闭弹窗"
              @click="closeModal"
            >
              ✕
            </button>
          </header>

          <section v-if="currentQuestion" class="random-question__body">
            <p class="random-question__question">{{ currentQuestion.question }}</p>

            <details
              v-if="renderedAnswers.length"
              class="random-question__answer"
              :key="detailsKey"
            >
              <summary>展开答案</summary>
              <div class="random-question__answer-blocks">
                <div
                  v-for="(item, index) in renderedAnswers"
                  :key="index"
                  class="random-question__answer-block"
                  v-html="item"
                />
              </div>
            </details>

            <a
              v-if="currentQuestion.reference"
              class="random-question__reference"
              :href="currentQuestion.reference"
              @click="handleReferenceClick"
            >
              查看原文
            </a>
          </section>

          <footer class="random-question__footer">
            <button type="button" class="random-question__next" @click="refreshQuestion">
              换一题
            </button>
          </footer>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Question } from '../data/questions'
import { questions } from '../data/questions'

const props = defineProps<{
  variant?: 'home' | 'nav'
}>()

const modalOpen = ref(false)
const currentQuestion = ref<Question | null>(null)
const detailsKey = ref(0)

const variant = computed(() => props.variant ?? 'home')
const containerClasses = computed(() => [
  'random-question',
  {
    'random-question--nav': variant.value === 'nav'
  }
])

const triggerClasses = computed(() => [
  'random-question__trigger',
  {
    'random-question__trigger--nav': variant.value === 'nav'
  }
])

const renderedAnswers = computed(() => currentQuestion.value?.answerHtml ?? [])

const getRandomQuestion = (): Question | null => {
  if (!questions.length) {
    return null
  }
  const index = Math.floor(Math.random() * questions.length)
  return questions[index]
}

const openModal = () => {
  const next = getRandomQuestion()
  if (!next) {
    return
  }
  currentQuestion.value = next
  detailsKey.value++
  modalOpen.value = true
}

const refreshQuestion = () => {
  const next = getRandomQuestion()
  if (!next) {
    return
  }
  currentQuestion.value = next
  detailsKey.value++
}

const closeModal = () => {
  modalOpen.value = false
}

const handleReferenceClick = () => {
  closeModal()
}
</script>

<style scoped>
.random-question {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.random-question--nav {
  margin-top: 0;
  justify-content: flex-start;
  align-items: center;
}

.random-question__trigger {
  border: none;
  border-radius: 999px;
  padding: 0.65rem 1.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  background: linear-gradient(120deg, #16a34a, #22d3ee);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.random-question__trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
}

.random-question__overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
  padding: 1rem;
}

.random-question__modal {
  width: auto;
  min-width: min(480px, calc(100% - 2rem));
  max-width: min(880px, calc(100% - 2rem));
  max-height: min(85vh, 900px);
  overflow-y: auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.random-question__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.random-question__eyebrow {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: #10b981;
  text-transform: uppercase;
}

.random-question__header h3 {
  margin: 0.2rem 0 0;
  font-size: 1.2rem;
}

.random-question__icon-button {
  border: none;
  background: transparent;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.2rem;
  line-height: 1;
}

.random-question__question {
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
}

.random-question__answer summary {
  cursor: pointer;
  font-weight: 600;
  color: #0f172a;
  margin: 0.4rem 0;
}

.random-question__answer-blocks {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #475569;
  font-size: 0.92rem;
}

.random-question__answer-block :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 0.5rem 0;
  font-size: 0.85rem;
}

.random-question__answer-block :deep(th),
.random-question__answer-block :deep(td) {
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.5rem;
  text-align: left;
}

.random-question__answer-block :deep(tr:nth-child(2n)) {
  background: #f8fafc;
}

.random-question__answer-block :deep(pre) {
  background: #0f172a;
  color: #e2e8f0;
  padding: 0.6rem;
  border-radius: 0.4rem;
  overflow: auto;
  font-size: 0.8rem;
}

.random-question__answer-block :deep(code:not(pre code)) {
  background: #f1f5f9;
  padding: 0.1rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 0.85em;
}

.random-question__reference {
  display: inline-flex;
  align-items: center;
  font-size: 0.85rem;
  color: #0ea5e9;
  margin-top: 0.5rem;
}

.random-question__footer {
  display: flex;
  justify-content: flex-end;
}

.random-question__next {
  border: none;
  border-radius: 0.6rem;
  padding: 0.5rem 1.4rem;
  font-weight: 600;
  background: #0ea5e9;
  color: #fff;
  cursor: pointer;
  transition: background 0.15s ease;
}

.random-question__next:hover {
  background: #0284c7;
}

@media (max-width: 640px) {
  .random-question__modal {
    padding: 1.2rem;
  }
}
.random-question__trigger--nav {
  padding: 0.35rem 1rem;
  font-size: 0.85rem;
  border-radius: 999px;
  margin-left: 1rem;
  box-shadow: none;
}

.random-question__trigger--nav:hover {
  box-shadow: none;
}
</style>
