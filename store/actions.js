export default {
  /**
   * @param {object} store
   * @param {object} newAnimal
 */
  setAddAnimal ({commit, state}, newAnimal) {
    commit('setAddAnimal', newAnimal)
  }
}
