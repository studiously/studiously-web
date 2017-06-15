import api from '@/api'

export default {
  async fetchQuestions ({dispatch, commit}, {uid}) {
    try {
      let questions = await api.getQuestions(uid)
      await questions.forEach(q => {
        dispatch('fetchQuestion', {id: q})
      })
    } catch (e) {
      commit('error', {error: e}, {root: true})
      throw e
    }
  },
  async fetchQuestion ({commit}, {id}) {
    try {
      commit('receiveQuestion', await api.getQuestion(id))
    } catch (e) {
      commit('error', {error: e}, {root: true})
      throw e
    }
  }
}
