export default {
  getAnimals: state => state.animals,
  getImages: state => state.images,
  getUser: state => state.user,
  getDisplayName: state => state.displayName,
  isAuthenticated: state => state.user,
  authError: state => state.authError
}
