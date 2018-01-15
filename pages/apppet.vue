<template>
  <div>
    <header-component></header-component>
    <redesign-component></redesign-component>
    <footer-component></footer-component>
    <div v-if="getUser">{{this.user.uid}}</div>
  </div>
</template>
<script>
  import { HeaderComponent, RedesignComponent, FooterComponent } from '~/components/common'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      RedesignComponent,
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
