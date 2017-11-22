export default {
  setAddAnimal (state, newAnimal) {
    state.animals.push(newAnimal)
  },
  setAnimalsRef (state, value) {
    state.animalsRef = value
  }
}
