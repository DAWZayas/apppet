import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'

export default {
  /**
   * @param {object} store
   * @param {object} newAnimal
 */
  setAddAnimal ({commit, state}, newAnimal) {
    if (state.animalsRef) {
      state.animalsRef.push(newAnimal)
    } else {
      commit('setAddAnimal', newAnimal)
    }
  },
  /**
   * Binds firebase configuration database reference to the store's corresponding object
   * @param {object} store
   */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}) => {
    let db = firebaseApp.database()
    let animalsRef = db.ref('/animals')

    dispatch('bindFirebaseReference', {reference: animalsRef, toBind: 'animals'}).then(() => {
      commit('setAnimalsRef', animalsRef)
    })
  }),
  /**
   * Generic binder of the firebase reference to the given key of the store's state
   * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
   * @param {object} store
   */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        reference.set(state[toBind])
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
    /**
   * Undbinds firebase references
   */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setAnimalsRef', null)
    try {
      unbindFirebaseRef('animals')
    } catch (error) {
      return
    }
  })
}
