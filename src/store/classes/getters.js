export default {
  classes: state => Object.values(state.classes),
  class: state => id => state.classes[id],
  current: state => state.classes[state.current]
}
