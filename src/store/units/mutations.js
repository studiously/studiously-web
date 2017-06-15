export default {
  receiveUnit (state, {unit}) {
    state.units[unit.id] = unit
  }
}
