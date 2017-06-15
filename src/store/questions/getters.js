export default {
  questions: state => uid => Object.values(state.questions).filter(q => q['unit_id'] === uid),
  question: state => id => state.questions[id]
}
