import api from '@/api'

export default {
  async fetchClasses ({dispatch, commit}) {
    try {
      let classes = await api.getClasses()
      await classes.forEach(c => {
        dispatch('fetchClass', {id: c})
      })
    } catch (e) {
      commit('error', {error: e}, {root: true})
      throw e
    }
  },
  async fetchClass ({commit}, {id}) {
    try {
      commit('receiveClass', {class: await api.getClass(id)})
    } catch (e) {
      commit('error', {error: e}, {root: true})
      throw e
    }
  }
}
