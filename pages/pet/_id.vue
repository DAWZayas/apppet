<template>
  <div>
    <header-component></header-component>
    <single-animal-info-component></single-animal-info-component>
  </div>
</template>
<script>
  import { SingleAnimalInfoComponent, HeaderComponent } from '~/components/common/layout'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      SingleAnimalInfoComponent
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
