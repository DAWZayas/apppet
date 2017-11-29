<template>
  <div>
    <login v-if="!isAuthenticated"></login>
    <apppet v-if="isAuthenticated"></apppet>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import apppet from '~/pages/apppet'
  import { mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {}
    },
    components: {login, apppet},
    methods: {
      ...mapActions(['bindAuth'])
    },
    computed: {
      ...mapState(['user']),
      isAuthenticated () {
        return this.user
      }
    },
    created () {
      this.bindAuth()
    }
  }
</script>
