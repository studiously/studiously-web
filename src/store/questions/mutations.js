export default {
  receiveQuestion (state, {question}) {
    state.questions[question.id] = question
  }
}
