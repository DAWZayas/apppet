<template>
  <div>
    <header-component></header-component>
    <app-pet-component></app-pet-component>
    <footer-component></footer-component>
    <div v-if="getUser">{{this.user.uid}}</div>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common/layout'
  import { AppPetComponent } from '~/components/common/main'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      AppPetComponent,
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
