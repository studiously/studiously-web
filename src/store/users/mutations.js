export default {
  receiveUser (state, {user}) {
    state.user = user
  },
  receiveProfile (state, {profile}) {
    state.profiles[profile.id] = profile
  }
}
