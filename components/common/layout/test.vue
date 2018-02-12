<template>
  <div @click="pepe">{{this.$route.params.id}}</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['petSinglePage']),
    pepe () {
      const pet = this.$route.params.id
      this.petSinglePage(pet)
    }
  }
}
</script>

<style scoped>
div{
  margin-top: 80px;
}
</style>
