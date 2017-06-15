// import { external } from '@/utils/namespace'

// const users = external(usersns, 'users')
// const classes = external(classesns, 'classes')

export default {
  async initialize ({commit, dispatch}) {
    return await dispatch('users/fetchUser')
      .then(() => {
        dispatch('classes/fetchClasses')
          .then(() => {
            commit('setLoading', {loading: false})
          })
          .catch(error(commit))
      })
      .catch(error(commit))
  }
}

function error (commit) {
  return function (e) {
    commit('error', {error: e}, {root: true})
    console.error(e)
    throw e
  }
}
