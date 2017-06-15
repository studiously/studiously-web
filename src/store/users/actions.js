import api from '@/api'

export default {
  fetchProfile ({commit}, id) {
    return api.getProfile(id)
      .then((profile) => {
        commit('receiveProfile', {profile: profile})
      })
      .catch((e) => {
        commit('error', {error: e}, {root: true})
        throw e
      })
  },
  fetchUser ({commit}) {
    return api.getUser()
      .then((cu) => {
        commit('receiveUser', {user: cu})
      })
      .catch((e) => {
        commit('error', {error: e}, {root: true})
        throw e
      })
  }
}
