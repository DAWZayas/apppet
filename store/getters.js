export default {
  getAnimals: state => state.animals,
  getImages: state => state.images,
  getUser: state => state.user,
  isAuthenticated: state => state.user,
  authError: state => state.authError
}
