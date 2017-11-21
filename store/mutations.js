export default {
  setAddAnimal (state, newAnimal) {
    state.animals.push(newAnimal)
  },
  setConfigRef (state, value) {
    state.configRef = value
  }
}
