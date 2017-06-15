export default {
  error (state, {error}) {
    state.errors.push({timestamp: new Date().getTime(), error: error})
  }
}
