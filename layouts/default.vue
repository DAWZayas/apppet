<template>
  <v-app>
    <loading-component v-show="!loaded"></loading-component>
    <alert-component :alert="alert"></alert-component>
    <nuxt />
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { LoadingComponent } from '~/components/layout'
import AlertComponent from '~/components/alerts/AlertComponent'
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
  components: {LoadingComponent, AlertComponent},
  methods: {
    ...mapActions(['bindAuth'])
  },
  computed: {
    ...mapGetters({alert: 'getAlert'})
  },
  created () {
    if (process.browser) {
      window.onNuxtReady((app) => { this.bindAuth() })
    }
  }
}
</script>
