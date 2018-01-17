<template>
  <div>
    <header-component></header-component>
    <favorites-component></favorites-component>     
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common/layout'
  import { FavoritesComponent } from '~/components/common/favorites'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      FavoritesComponent,
      FooterComponent
    },
    computed: {
      ...mapState(['user']),
      getUser () {
        // return this.user
        return false
      }
    }
  }
</script>
<style lang="scss">

</style>
