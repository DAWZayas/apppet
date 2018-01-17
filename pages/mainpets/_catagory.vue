<template>
  <div>
    <header-component></header-component>
    <main-component></main-component>
    <footer-component></footer-component>    
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common/layout'
  import { MainComponent } from '~/components/common/main'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      MainComponent,
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
