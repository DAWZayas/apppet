<template>
  <div>
    <header-component></header-component>
    <candidates-component></candidates-component>     
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common/layout'
  import { CandidatesComponent } from '~/components/common/candidates'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      CandidatesComponent,
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
