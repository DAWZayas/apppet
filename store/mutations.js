export default {
  setAddAnimal (state, newAnimal) {
    state.animals.push(newAnimal)
  },
  setAddPost (state, newPost) {
    state.notes.push(newPost)
  },
  setNotes (state, value) {
    state.notes = value
  },
  setLikes (state, value) {
    state.like = value
  },
  setAnimalsRef (state, value) {
    state.animalsRef = value
  },
  setUser (state, value) {
    state.user = value
  },
  setDisplayName (state, value) {
    state.displayName = value
  },
  setEmail (state, value) {
    state.email = value
  },
  setAuthError (state, value) {
    state.authError = value
  },
  setFavorite (state, value) {
    state.favorite = value
  },
  setSingleAnimal (state, value) {
    state.singleAnimal = value
  },
  setOwnerDisplayName (state, value) {
    state.ownerDisplayName = value
  },
  setOwnerPhotoURL (state, value) {
    state.ownerPhotoURL = value
  },
  setAlert (state, value) {
    state.alert = value
  },
  setNotification (state, value) {
    state.notification = value
  }
}
