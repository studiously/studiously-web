export default {
  receiveClass (state, {'class': c}) {
    state.classes[c.id] = c
  },
  setCurrent (state, {id}) {
    state.current = id
  }
}
