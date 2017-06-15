import api from '@/api'

export default {
  async fetchUnits ({dispatch, commit}, cid) {
    try {
      let units = await api.getUnits(cid)
      units.forEach(u => {
        dispatch('fetchUnit', {id: u})
      })
    } catch (e) {
      commit('error', {error: e}, {root: true})
      throw e
    }
  },
  async fetchUnit ({commit}, {id}) {
    try {
      commit('receiveUnit', await api.getUnit(id))
    } catch (e) {
      commit('error', {error: e}, {root: true})
      throw e
    }
  }
}
