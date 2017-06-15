export default {
  user: state => state.user,
  profile: state => (id) => state.profiles[id]
}

