<template>
  <div>
    <login v-if="!isAuthenticated"></login>
    <apppet v-if="isAuthenticated"></apppet>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import apppet from '~/pages/apppet'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {}
    },
    components: {login, apppet},
    computed: {
      ...mapState(['user']),
      isAuthenticated () {
        return this.user
      }
    }
  }
</script>
