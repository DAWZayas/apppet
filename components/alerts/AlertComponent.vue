<template>
  <v-snackbar
    :timeout="timeout"
    v-model="alert.state"
    top
    :color="alert.color"
    height=10
    
  >
   {{ alert.text }}
    <v-btn flat color="white" @click.native="snackbar = false">Vale</v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    data () {
      return {
        timeout: 4000
      }
    },
    props: ['alert']
  }
</script>

<style scoped>

</style>
