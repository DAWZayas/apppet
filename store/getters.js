export default {
  getAnimals: state => state.animals,
  getImages: state => state.images,
  getUser: state => state.user,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError
}
