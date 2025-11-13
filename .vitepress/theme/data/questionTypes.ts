export interface Question {
  id: number
  question: string
  answer: string[]
  reference: string
  source: string
  answerHtml?: string[]
}
