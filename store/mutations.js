export default {
  setAddAnimal (state, newAnimal) {
    state.animals.push(newAnimal)
  },
  setAnimalsRef (state, value) {
    state.animalsRef = value
  },
  setUser (state, value) {
    state.user = value
  },
  setAuthError (state, value) {
    state.authError = value
  }
}
