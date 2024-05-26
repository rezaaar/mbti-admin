import { defineStore } from 'pinia'

export const useMyQuestionStore = defineStore({
  id: 'myQuestionStore',
  state: () => ({
    questions: [],
    answers: [],
    personalities: '',
  }),
  actions: {
    getPersonalities() {
      // fetch personalities
    },
    getAnswers() {
      // fetch answers
    },
    async fetchQuestions() {

      const { data, error } = await useRest('/api/questions')

      if (error.value) {
        console.log('error', error.value)
      } else {
        this.questions = data.value.results
      }
      // fetch questions
    },
  }
})
