<template>
  <div>
    <header-component></header-component>
    <main-component></main-component>
    <filter-component></filter-component>
    <footer-component></footer-component>    
  </div>
</template>
<script>
  import { HeaderComponent, FilterComponent, FooterComponent } from '~/components/common/layout'
  import { MainComponent } from '~/components/common/main'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      FilterComponent,
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
