<template>
  <div>
    <header-component></header-component>
    <candidates-component></candidates-component>
    <button-add-component v-if="isAuthenticated"></button-add-component>    
  </div>
</template>
<script>
  import { HeaderComponent } from '~/components/common/layout'
  import { CandidatesComponent } from '~/components/common/post'
  import ButtonAddComponent from '~/components/common/buttons/ButtonAddComponent'
  import { mapState, mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      CandidatesComponent,
      ButtonAddComponent
    },
    computed: {
      ...mapGetters({ isAuthenticated: 'isAuthenticated' }),
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
