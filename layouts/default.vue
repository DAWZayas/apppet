<template>
  <v-app>
    <loading-component v-show="!loaded"></loading-component>
    <nuxt />
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import { LoadingComponent } from '~/components/layout'
export default {
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => { this.loaded = true }, Math.floor((Math.random() * 3000) + 2000))
    })
  },
  components: {LoadingComponent},
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
