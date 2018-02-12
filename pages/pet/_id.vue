<template>
  <div>
    <header-component></header-component>
    <test></test>
  </div>
</template>
<script>
  import { test, HeaderComponent } from '~/components/common/layout'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      test
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
