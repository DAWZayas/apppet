import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'
import uuidv1 from 'uuid/v1'

/**
 * Uploads individual file
 * @param file
 * @returns {firebase.Promise}
 * @private
 */
function _uploadImage (file) {
  let ref = firebaseApp.storage().ref().child('animals')
  return ref.child(uuidv1()).child(file.name).put(file).then(snapshot => {
    return snapshot.downloadURL
  })
}

export default {
  _uploadImage,
  /**
   * Uploads images to the firebase datastore
   * @param state
   * @param files
   * @returns {Promise}
   */
  uploadImages ({state}, files) {
    return Promise.all(files.map(_uploadImage))
  },
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
   * Creates a new user with given email and password and stores it in the firebase database
   * @param {object} store
   * @param {object} email and password
   */
  createUser ({commit}, {email, password}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        commit('setAuthError', '')
      })
      .catch(error => {
        commit('setAuthError', error.message)
      })
  },
  /**
  * Updates user display name
  * @param state
  * @param commit
  * @param {string} displayName
  */
  updateUserName ({state, commit}, displayName) {
    state.user.updateProfile({
      displayName
    })
    commit('setDisplayName', displayName)
  },
  /**
   * Authenticates a new user with given email and password
   * @param {object} store
   * @param {object} email and password
   */
  authenticate ({state, commit}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      commit('setAuthError', '')
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  /**
   * Resets authentication error
   * @param commit
   */
  resetAuthError ({commit}) {
    commit('setAuthError', '')
  },
  /**
   * Authenticates anonymous user
   * @param {object} store
   */
  authenticateAnonymous ({state}) {
    firebaseApp.auth().signInAnonymously().catch(error => {
      console.log(error.code, error.message)
    })
  },
  /**
   * Logouts the user from the application
   * @param {object} store
   */
  logout ({state}) {
    firebaseApp.auth().signOut()
  },
  /**
   * Binds firebase auth listener to the auth changes to the callback that will set the store's user object
   * @param {object} store
   */
  bindAuth ({commit, dispatch, state}) {
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      if (user && !user.isAnonymous) {
        let displayName = user.displayName || user.email.split('@')[0]
        if (!user.displayName) {
          dispatch('updateUserName', displayName)
        }
        commit('setDisplayName', displayName)
        dispatch('bindFirebaseReferences', user)
      }
      if (!user) {
    /*  dispatch('unbindFirebaseReferences') */
        dispatch('bindFirebaseReferencesAnonymous')
      }
    })
  },
  /**
   * Binds firebase configuration database reference to the store's corresponding object
   * @param {object} store
   */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}, user) => {
    let db = firebaseApp.database()
    let animalsRef = db.ref(`/animals`)

    dispatch('bindFirebaseReference', {reference: animalsRef, toBind: 'animals'}).then(() => {
      commit('setAnimalsRef', animalsRef)
    })
  }),
  /* Binds for anonymous */
  bindFirebaseReferencesAnonymous: firebaseAction(({state, commit, dispatch}) => {
    let db = firebaseApp.database()
    let animalsRef = db.ref(`/animals`)

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
        let values = state[toBind]
        typeof values === 'object' && delete values['.key']
        reference.set(values)
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
