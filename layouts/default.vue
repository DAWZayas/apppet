<template>
  <v-app>
    <nuxt />
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['bindAuth'])
  },
  created () {
    if (process.browser) {
      window.onNuxtReady((app) => { this.bindAuth() })
    }
  }
}
</script>
