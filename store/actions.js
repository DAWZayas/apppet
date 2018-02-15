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
  unSetAddAnimal ({commit, state}, key) {
    let db = firebaseApp.database()
    let animals = db.ref('/animals/')
    animals.child(key).remove()
  },
  setAddFavorite ({commit, state}, info) {
    let db = firebaseApp.database()
    let favorites = db.ref(`/users/` + info.userUid + `/favorites`)
    favorites.child(info.key).set(info.ownerUid)
  },
  unSetAddFavorite ({commit, state}, info) {
    let db = firebaseApp.database()
    let favorites = db.ref(`/users/` + info.userUid + `/favorites`)
    favorites.child(info.key).remove()
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
  updateUserNameFirst ({state, commit}, displayName) {
    state.user.updateProfile({
      displayName
    })
    commit('setDisplayName', displayName)
  },
  /**
  * Updates user display name auth
  * @param state
  * @param commit
  * @param {string} displayName
  */
  updateUserName ({state, commit}, {newDisplayName}) {
    firebaseApp.auth().currentUser.updateProfile({displayName: newDisplayName})
    .then(() => {
      commit('setDisplayName', newDisplayName)
    })
  },
  /**
  * Updates user email auth
  * @param state
  * @param commit
  * @param {string} displayName
  */
  updateUserEmail ({state, commit}, {newEmail}) {
    firebaseApp.auth().currentUser.updateEmail(newEmail)
    .then(() => {
      commit('setEmail', newEmail)
    })
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
    let db = firebaseApp.database()
    let usersRef = db.ref(`/users`)
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      if (user && !user.isAnonymous) {
        let displayName = user.displayName || user.email.split('@')[0]
        let id = user.uid
        let addFavorites = db.ref(`/users/` + user.uid + `/favorites`)
        addFavorites.on('value', function (snapshot) {
          commit('setFavorite', snapshot.val())
        })
        if (!user.displayName) {
          dispatch('updateUserNameFirst', displayName)
        }
        commit('setDisplayName', displayName)
        commit('setEmail', user.email)
        dispatch('bindFirebaseReferences', user)
        dispatch('bindUserData', {usersRef, id})
        usersRef.child(user.uid).child('exist').set(true)
        usersRef.child(user.uid).child('displayName').set(user.displayName)
        usersRef.child(user.uid).child('photoUrl').set(user.photoURL)
      }
      if (!user) {
    /*  dispatch('unbindFirebaseReferences') */
        dispatch('bindFirebaseReferencesAnonymous')
        dispatch('unbindUserData')
      }
    })
  },
  petSinglePage ({commit, state}, pet) {
    let db = firebaseApp.database()
    let animal = db.ref(`/animals/${pet}`)
    animal.on('value', function (snapshot) {
      commit('setSingleAnimal', snapshot.val())
      let owner = db.ref(`users/${snapshot.val().userUid}`)
      owner.on('value', function (snapshot) {
        commit('setOwnerDisplayName', snapshot.val().displayName)
        commit('setOwnerPhotoURL', snapshot.val().photoUrl)
      })
    })
  },
  bindUserData: firebaseAction(({state, dispatch}, {usersRef, id}) => {
    dispatch('bindFirebaseReference', {reference: usersRef.child(id), toBind: 'userData'})
  }),
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
  }),
  unbindUserData: firebaseAction(({state, dispatch, commit}) => {
    commit('setDisplayName', '')
    dispatch('unbindFirebaseReferences', {toUnbind: 'userData'})
  })
}
