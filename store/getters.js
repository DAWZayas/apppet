export default {
  getAnimals: state => state.animals.reverse(),
  getNotes: state => state.notes,
  getImages: state => state.images,
  getUser: state => state.user,
  getDisplayName: state => state.user ? state.displayName : state.noUser,
  getPhotoURL: state => state.user ? state.user.photoURL : state.profilePic,
  getEmail: state => state.email,
  isAuthenticated: state => state.user,
  authError: state => state.authError,
  getFavorite: state => state.favorite,
  getSingleAnimal: state => state.singleAnimal,
  getOwnerDisplayName: state => state.ownerDisplayName,
  getOwnerPhotoURL: state => state.ownerPhotoURL,
  getAlert: state => state.alert
}
