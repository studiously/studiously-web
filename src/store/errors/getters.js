export default {
  all: state => state.errors.sort((a, b) => a.timestamp - b.timestamp),
  latest: (state, getters) => getters.all[getters.all.length - 1]
}
