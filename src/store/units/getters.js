export default {
  units: state => cid => {
    return Object.values(state.units).filter(u => u['class_id'] === cid)
  },
  unit: state => id => {
    return state.units[id]
  }
}
