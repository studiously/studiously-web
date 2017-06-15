// export const GET_QUESTIONS = 'questions/get'

import namespace from 'utils/namespace'

export default namespace('questions', {
  getters: [
    'questions'
  ],
  actions: [
    'fetchQuestions',
    'fetchQuestion'
  ],
  mutations: [
    'receiveQuestions',
    'receiveQuestion'
  ]
})
