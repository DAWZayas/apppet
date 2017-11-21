<template>
  <div>
    <login></login>
  </div>
</template>
<script>
  import login from '~/pages/login'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {}
    },
    components: {login},
    methods: {
      ...mapActions(['bindFirebaseReferences'])
    },
    created () {
      this.bindFirebaseReferences()
    }
  }
</script>
